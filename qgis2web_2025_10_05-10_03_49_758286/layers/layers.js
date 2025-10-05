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

lyr_OpenStreetMap_0.setVisible(true);lyr_0000_25833_reindriftreinbeitedistrikt_shp_1.setVisible(true);lyr_0000_25833_reindriftsiidaomrade_shp_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_0000_25833_reindriftreinbeitedistrikt_shp_1,lyr_0000_25833_reindriftsiidaomrade_shp_2];
lyr_0000_25833_reindriftreinbeitedistrikt_shp_1.set('fieldAliases', {'objectid': 'objectid', 'objtype': 'objtype', 'distkode': 'distkode', 'eier': 'eier', 'produsent': 'produsent', 'kvalitet': 'kvalitet', 'forstedata': 'forstedata', 'oppdaterin': 'oppdaterin', 'areal': 'areal', 'malemetode': 'malemetode', 'noyaktighe': 'noyaktighe', 'synbarhet': 'synbarhet', 'verifiseri': 'verifiseri', 'status': 'status', });
lyr_0000_25833_reindriftsiidaomrade_shp_2.set('fieldAliases', {'objectid': 'objectid', 'objtype': 'objtype', 'navn': 'navn', 'eier': 'eier', 'produsent': 'produsent', 'kvalitet': 'kvalitet', 'forstedata': 'forstedata', 'oppdaterin': 'oppdaterin', 'areal': 'areal', 'areal_daa': 'areal_daa', 'malemetode': 'malemetode', 'noyaktighe': 'noyaktighe', 'synbarhet': 'synbarhet', 'verifiseri': 'verifiseri', 'siidatyper': 'siidatyper', 'status': 'status', });
lyr_0000_25833_reindriftreinbeitedistrikt_shp_1.set('fieldImages', {'objectid': 'TextEdit', 'objtype': 'TextEdit', 'distkode': 'TextEdit', 'eier': 'TextEdit', 'produsent': 'TextEdit', 'kvalitet': 'TextEdit', 'forstedata': 'DateTime', 'oppdaterin': 'DateTime', 'areal': 'TextEdit', 'malemetode': 'Range', 'noyaktighe': 'Range', 'synbarhet': 'Range', 'verifiseri': 'DateTime', 'status': 'Range', });
lyr_0000_25833_reindriftsiidaomrade_shp_2.set('fieldImages', {'objectid': 'TextEdit', 'objtype': 'TextEdit', 'navn': 'TextEdit', 'eier': 'TextEdit', 'produsent': 'TextEdit', 'kvalitet': 'TextEdit', 'forstedata': 'DateTime', 'oppdaterin': 'DateTime', 'areal': 'TextEdit', 'areal_daa': 'Range', 'malemetode': 'Range', 'noyaktighe': 'Range', 'synbarhet': 'Range', 'verifiseri': 'DateTime', 'siidatyper': 'TextEdit', 'status': 'Range', });
lyr_0000_25833_reindriftreinbeitedistrikt_shp_1.set('fieldLabels', {'objectid': 'no label', 'objtype': 'no label', 'distkode': 'no label', 'eier': 'no label', 'produsent': 'no label', 'kvalitet': 'no label', 'forstedata': 'no label', 'oppdaterin': 'header label - always visible', 'areal': 'header label - always visible', 'malemetode': 'header label - always visible', 'noyaktighe': 'header label - always visible', 'synbarhet': 'header label - always visible', 'verifiseri': 'header label - always visible', 'status': 'header label - always visible', });
lyr_0000_25833_reindriftsiidaomrade_shp_2.set('fieldLabels', {'objectid': 'no label', 'objtype': 'no label', 'navn': 'no label', 'eier': 'no label', 'produsent': 'no label', 'kvalitet': 'no label', 'forstedata': 'no label', 'oppdaterin': 'header label - always visible', 'areal': 'header label - always visible', 'areal_daa': 'header label - always visible', 'malemetode': 'header label - always visible', 'noyaktighe': 'header label - always visible', 'synbarhet': 'header label - always visible', 'verifiseri': 'header label - always visible', 'siidatyper': 'header label - always visible', 'status': 'header label - always visible', });
lyr_0000_25833_reindriftsiidaomrade_shp_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});