var size = 0;
var placement = 'point';

var style_0000_25833_reindriftsiidaomrade_shp_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(53,121,177,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.6479999999999997}),fill: new ol.style.Fill({color: 'rgba(0,0,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
