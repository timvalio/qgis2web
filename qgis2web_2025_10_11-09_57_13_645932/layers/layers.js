var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_0000_25833_reindriftreinbeitedistrikt_shp_1 = new ol.format.GeoJSON();
var features_0000_25833_reindriftreinbeitedistrikt_shp_1 = format_0000_25833_reindriftreinbeitedistrikt_shp_1.readFeatures(json_0000_25833_reindriftreinbeitedistrikt_shp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_0000_25833_reindriftreinbeitedistrikt_shp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_0000_25833_reindriftreinbeitedistrikt_shp_1.addFeatures(features_0000_25833_reindriftreinbeitedistrikt_shp_1);
var lyr_0000_25833_reindriftreinbeitedistrikt_shp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_0000_25833_reindriftreinbeitedistrikt_shp_1, 
                style: style_0000_25833_reindriftreinbeitedistrikt_shp_1,
                popuplayertitle: '0000_25833_reindrift-reinbeitedistrikt_shp',
                interactive: true,
                title: '<img src="styles/legend/0000_25833_reindriftreinbeitedistrikt_shp_1.png" /> 0000_25833_reindrift-reinbeitedistrikt_shp'
            });
var format_Skuohtanjrgakopier_2 = new ol.format.GeoJSON();
var features_Skuohtanjrgakopier_2 = format_Skuohtanjrgakopier_2.readFeatures(json_Skuohtanjrgakopier_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Skuohtanjrgakopier_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Skuohtanjrgakopier_2.addFeatures(features_Skuohtanjrgakopier_2);
var lyr_Skuohtanjrgakopier_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Skuohtanjrgakopier_2, 
                style: style_Skuohtanjrgakopier_2,
                popuplayertitle: 'Skuohtanjárga+ kopier',
                interactive: true,
                title: '<img src="styles/legend/Skuohtanjrgakopier_2.png" /> Skuohtanjárga+ kopier'
            });
var format_Kraftnett_Kraftlinje_3 = new ol.format.GeoJSON();
var features_Kraftnett_Kraftlinje_3 = format_Kraftnett_Kraftlinje_3.readFeatures(json_Kraftnett_Kraftlinje_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kraftnett_Kraftlinje_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kraftnett_Kraftlinje_3.addFeatures(features_Kraftnett_Kraftlinje_3);
var lyr_Kraftnett_Kraftlinje_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kraftnett_Kraftlinje_3, 
                style: style_Kraftnett_Kraftlinje_3,
                popuplayertitle: 'Kraftnett_Kraftlinje',
                interactive: true,
                title: '<img src="styles/legend/Kraftnett_Kraftlinje_3.png" /> Kraftnett_Kraftlinje'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_0000_25833_reindriftreinbeitedistrikt_shp_1.setVisible(true);lyr_Skuohtanjrgakopier_2.setVisible(true);lyr_Kraftnett_Kraftlinje_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_0000_25833_reindriftreinbeitedistrikt_shp_1,lyr_Skuohtanjrgakopier_2,lyr_Kraftnett_Kraftlinje_3];
lyr_0000_25833_reindriftreinbeitedistrikt_shp_1.set('fieldAliases', {'objectid': 'objectid', 'objtype': 'objtype', 'distkode': 'distkode', 'eier': 'eier', 'produsent': 'produsent', 'kvalitet': 'kvalitet', 'forstedata': 'forstedata', 'oppdaterin': 'oppdaterin', 'areal': 'areal', 'malemetode': 'malemetode', 'noyaktighe': 'noyaktighe', 'synbarhet': 'synbarhet', 'verifiseri': 'verifiseri', 'status': 'status', });
lyr_Skuohtanjrgakopier_2.set('fieldAliases', {'objectid': 'objectid', 'objtype': 'objtype', 'beitebruke': 'beitebruke', 'sesomr': 'sesomr', 'eier': 'eier', 'produsent': 'produsent', 'kvalitet': 'kvalitet', 'forstedata': 'forstedata', 'oppdaterin': 'oppdaterin', 'areal': 'areal', 'malemetode': 'malemetode', 'noyaktighe': 'noyaktighe', 'synbarhet': 'synbarhet', 'beitebru_1': 'beitebru_1', 'beitebru_2': 'beitebru_2', 'verifiseri': 'verifiseri', 'status': 'status', 'utenforrei': 'utenforrei', 'original_o': 'original_o', });
lyr_Kraftnett_Kraftlinje_3.set('fieldAliases', {'objType': 'objType', 'kompKode': 'kompKode', 'kompKodSys': 'kompKodSys', 'nveNettniv': 'nveNettniv', 'nettnivaa': 'nettnivaa', 'eier': 'eier', 'eierOrgnr': 'eierOrgnr', 'navn': 'navn', 'spenningkV': 'spenningkV', 'driftsatt': 'driftsatt', 'nveOpprett': 'nveOpprett', 'nveEndret': 'nveEndret', 'kildEndret': 'kildEndret', 'malemetode': 'malemetode', 'noyaktighe': 'noyaktighe', 'lokalID': 'lokalID', 'uttakDato': 'uttakDato', 'ekspType': 'ekspType', });
lyr_0000_25833_reindriftreinbeitedistrikt_shp_1.set('fieldImages', {'objectid': 'TextEdit', 'objtype': 'TextEdit', 'distkode': 'TextEdit', 'eier': 'TextEdit', 'produsent': 'TextEdit', 'kvalitet': 'TextEdit', 'forstedata': 'DateTime', 'oppdaterin': 'DateTime', 'areal': 'TextEdit', 'malemetode': 'Range', 'noyaktighe': 'Range', 'synbarhet': 'Range', 'verifiseri': 'DateTime', 'status': 'Range', });
lyr_Skuohtanjrgakopier_2.set('fieldImages', {'objectid': 'TextEdit', 'objtype': 'TextEdit', 'beitebruke': 'TextEdit', 'sesomr': 'Range', 'eier': 'TextEdit', 'produsent': 'TextEdit', 'kvalitet': 'TextEdit', 'forstedata': 'DateTime', 'oppdaterin': 'DateTime', 'areal': 'TextEdit', 'malemetode': 'Range', 'noyaktighe': 'Range', 'synbarhet': 'Range', 'beitebru_1': 'TextEdit', 'beitebru_2': 'TextEdit', 'verifiseri': 'DateTime', 'status': 'Range', 'utenforrei': 'CheckBox', 'original_o': 'TextEdit', });
lyr_Kraftnett_Kraftlinje_3.set('fieldImages', {'objType': '', 'kompKode': '', 'kompKodSys': '', 'nveNettniv': '', 'nettnivaa': '', 'eier': '', 'eierOrgnr': '', 'navn': '', 'spenningkV': '', 'driftsatt': '', 'nveOpprett': '', 'nveEndret': '', 'kildEndret': '', 'malemetode': '', 'noyaktighe': '', 'lokalID': '', 'uttakDato': '', 'ekspType': '', });
lyr_0000_25833_reindriftreinbeitedistrikt_shp_1.set('fieldLabels', {'objectid': 'no label', 'objtype': 'no label', 'distkode': 'no label', 'eier': 'no label', 'produsent': 'no label', 'kvalitet': 'no label', 'forstedata': 'no label', 'oppdaterin': 'header label - always visible', 'areal': 'header label - always visible', 'malemetode': 'header label - always visible', 'noyaktighe': 'header label - always visible', 'synbarhet': 'header label - always visible', 'verifiseri': 'header label - always visible', 'status': 'header label - always visible', });
lyr_Skuohtanjrgakopier_2.set('fieldLabels', {'objectid': 'no label', 'objtype': 'no label', 'beitebruke': 'no label', 'sesomr': 'no label', 'eier': 'no label', 'produsent': 'no label', 'kvalitet': 'no label', 'forstedata': 'no label', 'oppdaterin': 'no label', 'areal': 'no label', 'malemetode': 'no label', 'noyaktighe': 'no label', 'synbarhet': 'no label', 'beitebru_1': 'no label', 'beitebru_2': 'no label', 'verifiseri': 'no label', 'status': 'no label', 'utenforrei': 'no label', 'original_o': 'no label', });
lyr_Kraftnett_Kraftlinje_3.set('fieldLabels', {'objType': 'no label', 'kompKode': 'no label', 'kompKodSys': 'no label', 'nveNettniv': 'no label', 'nettnivaa': 'no label', 'eier': 'no label', 'eierOrgnr': 'no label', 'navn': 'no label', 'spenningkV': 'no label', 'driftsatt': 'no label', 'nveOpprett': 'no label', 'nveEndret': 'no label', 'kildEndret': 'no label', 'malemetode': 'no label', 'noyaktighe': 'no label', 'lokalID': 'no label', 'uttakDato': 'no label', 'ekspType': 'no label', });
lyr_Kraftnett_Kraftlinje_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});