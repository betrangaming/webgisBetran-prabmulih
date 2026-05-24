var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Fixedgeometries_1 = new ol.format.GeoJSON();
var features_Fixedgeometries_1 = format_Fixedgeometries_1.readFeatures(json_Fixedgeometries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fixedgeometries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fixedgeometries_1.addFeatures(features_Fixedgeometries_1);
var lyr_Fixedgeometries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fixedgeometries_1, 
                style: style_Fixedgeometries_1,
                popuplayertitle: 'Fixed geometries',
                interactive: true,
                title: '<img src="styles/legend/Fixedgeometries_1.png" /> Fixed geometries'
            });
var format_Fixedgeometries_2 = new ol.format.GeoJSON();
var features_Fixedgeometries_2 = format_Fixedgeometries_2.readFeatures(json_Fixedgeometries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fixedgeometries_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fixedgeometries_2.addFeatures(features_Fixedgeometries_2);
var lyr_Fixedgeometries_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fixedgeometries_2, 
                style: style_Fixedgeometries_2,
                popuplayertitle: 'Fixed geometries',
                interactive: true,
                title: '<img src="styles/legend/Fixedgeometries_2.png" /> Fixed geometries'
            });
var format_ADMINISTRASIKECAMATAN_AR_50K_3 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_3 = format_ADMINISTRASIKECAMATAN_AR_50K_3.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_3.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_3);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_3, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_3,
                popuplayertitle: 'ADMINISTRASIKECAMATAN_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_3.png" /> ADMINISTRASIKECAMATAN_AR_50K'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Fixedgeometries_1.setVisible(true);lyr_Fixedgeometries_2.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Fixedgeometries_1,lyr_Fixedgeometries_2,lyr_ADMINISTRASIKECAMATAN_AR_50K_3];
lyr_Fixedgeometries_1.set('fieldAliases', {'id': 'id', });
lyr_Fixedgeometries_2.set('fieldAliases', {'id': 'id', 'Kelurahan': 'Kelurahan', 'Kecamatan': 'Kecamatan', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_3.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Fixedgeometries_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Fixedgeometries_2.set('fieldImages', {'id': 'TextEdit', 'Kelurahan': 'TextEdit', 'Kecamatan': 'TextEdit', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_3.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Fixedgeometries_1.set('fieldLabels', {'id': 'no label', });
lyr_Fixedgeometries_2.set('fieldLabels', {'id': 'no label', 'Kelurahan': 'no label', 'Kecamatan': 'no label', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_3.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});