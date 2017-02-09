browser.get('http://localhost:3000');
browser.sleep(200);
var search = element(by.model('main.search'))
var planets;
var pagination;

var First;
var Previous;
var Next;
var Last;
var x = element   (by.css('[ng-click="main.setPage(1)]'));
var name = element(by.cssContainingText('.sort', 'name'));
var population = element(by.cssContainingText('.sort', 'population'));
var diameter = element(by.cssContainingText('.sort', 'diameter'));
var rotation_period = element(by.cssContainingText('.sort', 'rotation period'));
var orbital_period = element(by.cssContainingText('.sort', 'orbital period'));

function getButtons() {
  First = element(by.buttonText('First'));
  Previous = element(by.buttonText('◄'));
  Next = element(by.buttonText('►'));
  Last = element(by.buttonText('Last'));
}

function getPlanets() {
  planets = element.all(by.css('.table__body td'));
}

describe('planet search app', function() {

  it('should remove symbols and numbers from search', function() {
    search.sendKeys('?');
    expect(search.getAttribute('value')).toEqual('');
    search.sendKeys('!');
    expect(search.getAttribute('value')).toEqual('');
    search.sendKeys('2');
    expect(search.getAttribute('value')).toEqual('');
  });

  it('should give Zolan when searching "z"', function() {
    search.sendKeys('z');
    getPlanets();
    expect(planets.get(0).getText()).toEqual('Zolan');

  });

  it('should have disabled buttons if there is only 1 page', function() {
    getButtons();
    expect(Last.isEnabled()).toBe(false);
    expect(First.isEnabled()).toBe(false);
    expect(Previous.isEnabled()).toBe(false);
    expect(Next.isEnabled()).toBe(false);
    expect(element(by.buttonText('1')).isEnabled()).toBe(false);
    expect(element(by.buttonText('2')).isEnabled()).toBe(false);
    expect(element(by.buttonText('...')).isEnabled()).toBe(false);
  });

  it('should disable the correct buttons on the first page', function() {
    search.clear();
    search.sendKeys('o');
    getButtons();
    expect(Last.isEnabled()).toBe(true);
    expect(First.isEnabled()).toBe(false);
    expect(Previous.isEnabled()).toBe(false);
    expect(Next.isEnabled()).toBe(true);
  });

  it('should disable correct buttons on clicking last', function() {
    getButtons();
    Last.click();
    expect(Last.isEnabled()).toBe(false);
    expect(First.isEnabled()).toBe(true);
    expect(Previous.isEnabled()).toBe(true);
    expect(Next.isEnabled()).toBe(false);
    expect(element(by.buttonText('4')).isEnabled()).toBe(false);
    expect(element(by.buttonText('3')).isEnabled()).toBe(true);
    expect(element(by.buttonText('...')).isEnabled()).toBe(false);
  });

  it('should give Dantooine when searching "D"', function() {
    search.clear();
    search.sendKeys('d');
    getPlanets();
    expect(planets.get(0).getText()).toEqual('Dantooine');
    expect(planets.get(1).getText()).toEqual('1000');
    expect(planets.get(2).getText()).toEqual('9830');
    expect(planets.get(3).getText()).toEqual('25');
    expect(planets.get(12).getText()).toEqual('savannas');
  });

  it('should sort by name', function() {
    name.click();
    expect(planets.get(0).getText()).toEqual('Alderaan');
    expect(planets.get(1).getText()).toEqual('2000000000');
    expect(planets.get(2).getText()).toEqual('12500');
    expect(planets.get(3).getText()).toEqual('24');
    expect(planets.get(12).getText()).toEqual('mountains');
  });

  it('should sort by population', function() {
    population.click();
    expect(planets.get(0).getText()).toEqual('Dantooine');
    population.click();
    expect(planets.get(0).getText()).toEqual('Dagobah');
    expect(planets.get(1).getText()).toEqual('unknown');
  });

  it('should sort by diameter', function() {
    diameter.click();
    expect(planets.get(0).getText()).toEqual('Cato Neimoidia');
    diameter.click();
    expect(planets.get(0).getText()).toEqual('Ord Mantell');
    expect(planets.get(1).getText()).toEqual('4000000000');
  });

  it('should sort by rotation period', function() {
    rotation_period.click();
    expect(planets.get(0).getText()).toEqual('Endor');
    rotation_period.click();
    expect(planets.get(0).getText()).toEqual('Rodia');
    expect(planets.get(1).getText()).toEqual('1300000000');
  });

  it('should sort by orbital period', function() {
    orbital_period.click();
    expect(planets.get(0).getText()).toEqual('Cato Neimoidia');
    orbital_period.click();
    expect(planets.get(0).getText()).toEqual('Endor');
    expect(planets.get(2).getText()).toEqual('4900');
  });
});
