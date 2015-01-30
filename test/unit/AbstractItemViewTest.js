'use strict';

/* jasmine specs for controllers go here */
describe('AbstractItemViewTest', function() {

  describe('SpiSdk.AbstractItemView', function(){

    it('should test default AbstractItemView values', function() {
        var component = new Lotus.AbstractItemView();
        var element = document.createElement('div');
        element.setAttribute('attribute-id', '1234');
        var model = {};
        document.body.appendChild(element);
        element.innerHTML = '<button sking-part="button" attribute-test="test"><label skin-part="label">Test</label></button>';
        var context = new Lotus.Context(Lavender.ModelLocator.getInstance().config);
        component.created(element, context);
        component.model = model;
        expect( component.element === element ).toBe( true );
        expect( component.model === model ).toBe( true );
        expect( component.id ).toBe( '1234' );
        component.destroy();
        expect( component.element === null ).toBe( true );
        expect( component.model === null ).toBe( true );
        expect( component.id ).toBe( null );
    });

  });
});