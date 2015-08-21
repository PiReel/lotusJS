/**
 * Created by dsmiley on 8/19/15.
 */
'use strict';

/* jasmine specs for controllers go here */
describe('AbstractThumbnailView', function() {

    describe('Lotus.ThumbnailPageNavigation', function(){

        it('should test default AbstractThumbnailView values', function() {
            var context = new Lotus.Context(Lavender.ModelLocator.getInstance().config);

            var component = new Lotus.AbstractThumbnailView();
            var element = document.createElement('div');
            element.setAttribute('attribute-thumb-width', '96');
            element.setAttribute('attribute-thumb-height', '96');
            document.body.appendChild(element);
            element.innerHTML = '<div skin-part="thumbnailContainer">' +
                '<img skin-part="thumbnail"></image>' +
                '</div>';
            component.element = element;
            component.id = '1234';
            component.created(element, context);
            var model = {};
            model.defaultThumbWidth = 30;
            model.defaultThumbHeight = 50;
            model.defaultWidth = 300;
            model.defaultHeight = 500;
            model.type = 'image';//String
            model.uid = '1234';//String
            model.fileName = 'test file name';//String
            model.name = 'test name';//String
            var asset = {};
            asset.type = 'image';//String
            asset.uid = '1234';//String
            asset.fileName = 'test file name';//String
            asset.name = 'test name';//String
            asset.categories = [];
            asset.printFileName = 'test print file name';//String
            asset.printFileType = 'test print file type';//String
            asset.printFilePart = 'test print file part';//String
            asset.printFileCrop = 'test print file crop';//String
            asset.printFileVisibleLayerList = 'test layers';//String
            asset.thumbnailFilename = 'test thumb file name';//String
            asset.source = 'test source';//String
            asset.thumbnailUriPath = 'http://dev.silpub.com/sdsession/4120da7b-3d43-4241-9d4a-a6913f1ee937/imageasset/e84a12b5-43f5-4bc5-9344-7bdd329c9daf/output/thumbnail';//String
            asset.webUriPath = 'http://dev.silpub.com/sdsession/4120da7b-3d43-4241-9d4a-a6913f1ee937/imageasset/e84a12b5-43f5-4bc5-9344-7bdd329c9daf/output/weblink';//String
            asset.uriPath = asset.webUriPath;
            asset.thumbUrl = asset.thumbnailUriPath;
            model.asset = asset;
            component.model = model;

            expect( component.element === element ).toBe( true );
            expect( component.model === model ).toBe( true );
            expect( component.id ).toBe( '1234' );
            expect( component.thumbnailContainer === element.querySelector('[skin-part=thumbnailContainer]') ).toBe( true );
            expect( component.thumbnail === element.querySelector('[skin-part=thumbnail]') ).toBe( true );
            expect( component.thumbnail.getAttribute('src') ).toBe( 'http://dev.silpub.com/sdsession/4120da7b-3d43-4241-9d4a-a6913f1ee937/imageasset/e84a12b5-43f5-4bc5-9344-7bdd329c9daf/output/thumbnail' );
            expect( component.thumbnail.getAttribute('width') ).toBe( '57.6px' );
            expect( component.thumbnail.getAttribute('height') ).toBe( '96px' );
            component.destroy();
            expect( component.element === null ).toBe( true );
            expect( component.model === null ).toBe( true );
            expect( component.thumbnail === null ).toBe( true );
            expect( component.thumbnailContainer === null ).toBe( true );
            expect( component.thumbnailSelectedClass === null ).toBe( true );
            expect( component.thumbClickProxy === null ).toBe( true );
            expect( component.id ).toBe( null );
        });

    });
});
