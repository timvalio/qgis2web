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
var format_0000_25833_reindriftsiidaomrade_shp_2 = new ol.format.GeoJSON();
var features_0000_25833_reindriftsiidaomrade_shp_2 = format_0000_25833_reindriftsiidaomrade_shp_2.readFeatures(json_0000_25833_reindriftsiidaomrade_shp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_0000_25833_reindriftsiidaomrade_shp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_0000_25833_reindriftsiidaomrade_shp_2.addFeatures(features_0000_25833_reindriftsiidaomrade_shp_2);
var lyr_0000_25833_reindriftsiidaomrade_shp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_0000_25833_reindriftsiidaomrade_shp_2, 
                style: style_0000_25833_reindriftsiidaomrade_shp_2,
                popuplayertitle: '0000_25833_reindrift-siidaomrade_shp',
                interactive: true,
                title: '<img src="styles/legend/0000_25833_reindriftsiidaomrade_shp_2.png" /> 0000_25833_reindrift-siidaomrade_shp'
            });

lyr_OpenStreetMap_0.setVisible(false);lyr_0000_25833_reindriftreinbeitedistrikt_shp_1.setVisible(false);lyr_0000_25833_reindriftsiidaomrade_shp_2.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_0000_25833_reindriftreinbeitedistrikt_shp_1,lyr_0000_25833_reindriftsiidaomrade_shp_2];
lyr_0000_25833_reindriftreinbeitedistrikt_shp_1.set('fieldAliases', {'objectid': 'objectid', 'objtype': 'objtype', 'distkode': 'distkode', 'eier': 'eier', 'produsent': 'produsent', 'kvalitet': 'kvalitet', 'forstedata': 'forstedata', 'oppdaterin': 'oppdaterin', 'areal': 'areal', 'malemetode': 'malemetode', 'noyaktighe': 'noyaktighe', 'synbarhet': 'synbarhet', 'verifiseri': 'verifiseri', 'status': 'status', });
lyr_0000_25833_reindriftsiidaomrade_shp_2.set('fieldAliases', {'objectid': 'objectid', 'objtype': 'objtype', 'navn': 'navn', 'eier': 'eier', 'produsent': 'produsent', 'kvalitet': 'kvalitet', 'forstedata': 'forstedata', 'oppdaterin': 'oppdaterin', 'areal': 'areal', 'areal_daa': 'areal_daa', 'malemetode': 'malemetode', 'noyaktighe': 'noyaktighe', 'synbarhet': 'synbarhet', 'verifiseri': 'verifiseri', 'siidatyper': 'siidatyper', 'status': 'status', });
lyr_0000_25833_reindriftreinbeitedistrikt_shp_1.set('fieldImages', {'objectid': 'TextEdit', 'objtype': 'TextEdit', 'distkode': 'TextEdit', 'eier': 'TextEdit', 'produsent': 'TextEdit', 'kvalitet': 'TextEdit', 'forstedata': 'DateTime', 'oppdaterin': 'DateTime', 'areal': 'TextEdit', 'malemetode': 'Range', 'noyaktighe': 'Range', 'synbarhet': 'Range', 'verifiseri': 'DateTime', 'status': 'Range', });
lyr_0000_25833_reindriftsiidaomrade_shp_2.set('fieldImages', {'objectid': 'TextEdit', 'objtype': 'TextEdit', 'navn': 'TextEdit', 'eier': 'TextEdit', 'produsent': 'TextEdit', 'kvalitet': 'TextEdit', 'forstedata': 'DateTime', 'oppdaterin': 'DateTime', 'areal': 'TextEdit', 'areal_daa': 'Range', 'malemetode': 'Range', 'noyaktighe': 'Range', 'synbarhet': 'Range', 'verifiseri': 'DateTime', 'siidatyper': 'TextEdit', 'status': 'Range', });
lyr_0000_25833_reindriftreinbeitedistrikt_shp_1.set('fieldLabels', {'objectid': 'header label - visible with data', 'objtype': 'header label - visible with data', 'distkode': 'header label - visible with data', 'eier': 'header label - visible with data', 'produsent': 'header label - visible with data', 'kvalitet': 'header label - visible with data', 'forstedata': 'header label - visible with data', 'oppdaterin': 'header label - visible with data', 'areal': 'header label - visible with data', 'malemetode': 'header label - visible with data', 'noyaktighe': 'header label - visible with data', 'synbarhet': 'header label - visible with data', 'verifiseri': 'header label - visible with data', 'status': 'header label - visible with data', });
lyr_0000_25833_reindriftsiidaomrade_shp_2.set('fieldLabels', {'objectid': 'header label - visible with data', 'objtype': 'header label - visible with data', 'navn': 'header label - visible with data', 'eier': 'header label - visible with data', 'produsent': 'header label - visible with data', 'kvalitet': 'header label - visible with data', 'forstedata': 'header label - visible with data', 'oppdaterin': 'header label - visible with data', 'areal': 'header label - visible with data', 'areal_daa': 'header label - visible with data', 'malemetode': 'header label - visible with data', 'noyaktighe': 'header label - visible with data', 'synbarhet': 'header label - visible with data', 'verifiseri': 'header label - visible with data', 'siidatyper': 'header label - visible with data', 'status': 'header label - visible with data', });
lyr_0000_25833_reindriftsiidaomrade_shp_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});