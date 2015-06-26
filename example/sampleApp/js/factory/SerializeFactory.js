/**
 * Created by dsmiley on 6/26/15.
 */
/**
 * Created by dsmiley on 1/10/14.
 */
SampleApp.SerializeFactory = function(){
    if (SampleApp.SerializeFactory.instance != null) {
        throw( 'SampleApp.EventDispatcherFactory.instance: Singleton class has already been instantiated' );
    } else {
        //perform any required object set up
    }
}

/*
 * Stub for override, this method is just an example of how this factory can be used
 * */
SampleApp.SerializeFactory.prototype.getServiceResultParser = function(config)
{
    var parser;
    switch( config.parserCode ){
        case '0.99':
        default:
            parser = new SampleApp.ServiceResultParser();
            break;
    }
    return parser;
}

/*
 * Stub for override, this method is just an example of how this factory can be used
 * */
SampleApp.SerializeFactory.prototype.getServiceExporter = function(config)
{
    var exporter;
    //code out once sample app exports data to services
    switch( config.exporterCode ){
        case '0.99':
        default:
            exporter = {};
            break;
    }
    return exporter;
}

SampleApp.SerializeFactory.getInstance = function(){
    if (SampleApp.SerializeFactory.instance == null) {
        SampleApp.SerializeFactory.instance = new SampleApp.SerializeFactory();
    }
    return SampleApp.SerializeFactory.instance;
}

SampleApp.SerializeFactory.instance = null;
