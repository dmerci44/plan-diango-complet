var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_diangopoly_1 = new ol.format.GeoJSON();
var features_diangopoly_1 = format_diangopoly_1.readFeatures(json_diangopoly_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_diangopoly_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_diangopoly_1.addFeatures(features_diangopoly_1);
var lyr_diangopoly_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_diangopoly_1, 
                style: style_diangopoly_1,
                popuplayertitle: 'diango poly',
                interactive: true,
                title: '<img src="styles/legend/diangopoly_1.png" /> diango poly'
            });
var format_RUISDIA_2 = new ol.format.GeoJSON();
var features_RUISDIA_2 = format_RUISDIA_2.readFeatures(json_RUISDIA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUISDIA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUISDIA_2.addFeatures(features_RUISDIA_2);
var lyr_RUISDIA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUISDIA_2, 
                style: style_RUISDIA_2,
                popuplayertitle: 'RUIS DIA',
                interactive: true,
                title: '<img src="styles/legend/RUISDIA_2.png" /> RUIS DIA'
            });
var format_numdiango_3 = new ol.format.GeoJSON();
var features_numdiango_3 = format_numdiango_3.readFeatures(json_numdiango_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_numdiango_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_numdiango_3.addFeatures(features_numdiango_3);
var lyr_numdiango_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_numdiango_3, 
                style: style_numdiango_3,
                popuplayertitle: 'num diango.',
                interactive: false,
                title: '<img src="styles/legend/numdiango_3.png" /> num diango.'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_diangopoly_1.setVisible(true);lyr_RUISDIA_2.setVisible(true);lyr_numdiango_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_diangopoly_1,lyr_RUISDIA_2,lyr_numdiango_3];
lyr_diangopoly_1.set('fieldAliases', {'di': 'di', });
lyr_RUISDIA_2.set('fieldAliases', {'F': 'F', });
lyr_numdiango_3.set('fieldAliases', {'NN': 'NN', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', });
lyr_diangopoly_1.set('fieldImages', {'di': '', });
lyr_RUISDIA_2.set('fieldImages', {'F': '', });
lyr_numdiango_3.set('fieldImages', {'NN': '', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', });
lyr_diangopoly_1.set('fieldLabels', {'di': 'inline label - always visible', });
lyr_RUISDIA_2.set('fieldLabels', {'F': 'inline label - always visible', });
lyr_numdiango_3.set('fieldLabels', {'NN': 'inline label - visible with data', });
lyr_numdiango_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});