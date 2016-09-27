/**
 * Created by dsmiley on 1/13/14.
 */
'use strict';

/* jasmine specs for controllers go here */
describe('AbstractComponentTest', function () {

    it('check AbstractComponent function and values', function () {
        var component = new Lotus.AbstractComponent();
        component.testProperty = null;
        var skinPart = new Lotus.SkinPart('testProperty', component, 'testProperty');
        component.skinParts.addItem(skinPart);
        var element = document.createElement('div');
        element.setAttribute('attribute-id', '1234');
        element.innerHTML = '<div skin-part="testProperty">' +
            '</div>';
        var context = new Lotus.Context(Lavender.ModelLocator.getInstance().config);
        component.created(element, context);
        expect(component.element === element).toBe(true);
        expect(component.ready).toBe(true);
        expect(component.context === context).toBe(true);
        expect(component.id === '1234').toBe(true);
        expect(component.skinParts.skinPartsByLabel['testProperty'].element === element.firstChild ).toBe(true);
    });
});
