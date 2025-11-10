var wms_layers = [];


        var lyr_GoogleStreet_0 = new ol.layer.Tile({
            'title': 'Google Street',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Xenotim_2 = new ol.format.GeoJSON();
var features_Xenotim_2 = format_Xenotim_2.readFeatures(json_Xenotim_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Xenotim_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Xenotim_2.addFeatures(features_Xenotim_2);
var lyr_Xenotim_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Xenotim_2, 
                style: style_Xenotim_2,
                popuplayertitle: 'Xenotim',
                interactive: true,
                title: '<img src="styles/legend/Xenotim_2.png" /> Xenotim'
            });
var format_TitanPlaser_3 = new ol.format.GeoJSON();
var features_TitanPlaser_3 = format_TitanPlaser_3.readFeatures(json_TitanPlaser_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitanPlaser_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitanPlaser_3.addFeatures(features_TitanPlaser_3);
var lyr_TitanPlaser_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitanPlaser_3, 
                style: style_TitanPlaser_3,
                popuplayertitle: 'Titan Plaser',
                interactive: true,
                title: '<img src="styles/legend/TitanPlaser_3.png" /> Titan Plaser'
            });
var format_TitanLaterit_4 = new ol.format.GeoJSON();
var features_TitanLaterit_4 = format_TitanLaterit_4.readFeatures(json_TitanLaterit_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitanLaterit_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitanLaterit_4.addFeatures(features_TitanLaterit_4);
var lyr_TitanLaterit_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitanLaterit_4, 
                style: style_TitanLaterit_4,
                popuplayertitle: 'Titan Laterit',
                interactive: true,
                title: '<img src="styles/legend/TitanLaterit_4.png" /> Titan Laterit'
            });
var format_Timbal_5 = new ol.format.GeoJSON();
var features_Timbal_5 = format_Timbal_5.readFeatures(json_Timbal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Timbal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Timbal_5.addFeatures(features_Timbal_5);
var lyr_Timbal_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Timbal_5, 
                style: style_Timbal_5,
                popuplayertitle: 'Timbal',
                interactive: true,
                title: '<img src="styles/legend/Timbal_5.png" /> Timbal'
            });
var format_Timah_6 = new ol.format.GeoJSON();
var features_Timah_6 = format_Timah_6.readFeatures(json_Timah_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Timah_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Timah_6.addFeatures(features_Timah_6);
var lyr_Timah_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Timah_6, 
                style: style_Timah_6,
                popuplayertitle: 'Timah',
                interactive: true,
                title: '<img src="styles/legend/Timah_6.png" /> Timah'
            });
var format_Tembaga_7 = new ol.format.GeoJSON();
var features_Tembaga_7 = format_Tembaga_7.readFeatures(json_Tembaga_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tembaga_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tembaga_7.addFeatures(features_Tembaga_7);
var lyr_Tembaga_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tembaga_7, 
                style: style_Tembaga_7,
                popuplayertitle: 'Tembaga',
                interactive: true,
                title: '<img src="styles/legend/Tembaga_7.png" /> Tembaga'
            });
var format_Seng_8 = new ol.format.GeoJSON();
var features_Seng_8 = format_Seng_8.readFeatures(json_Seng_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seng_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Seng_8.addFeatures(features_Seng_8);
var lyr_Seng_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Seng_8, 
                style: style_Seng_8,
                popuplayertitle: 'Seng',
                interactive: true,
                title: '<img src="styles/legend/Seng_8.png" /> Seng'
            });
var format_Platina_9 = new ol.format.GeoJSON();
var features_Platina_9 = format_Platina_9.readFeatures(json_Platina_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Platina_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Platina_9.addFeatures(features_Platina_9);
var lyr_Platina_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Platina_9, 
                style: style_Platina_9,
                popuplayertitle: 'Platina',
                interactive: true,
                title: '<img src="styles/legend/Platina_9.png" /> Platina'
            });
var format_Perak_10 = new ol.format.GeoJSON();
var features_Perak_10 = format_Perak_10.readFeatures(json_Perak_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perak_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perak_10.addFeatures(features_Perak_10);
var lyr_Perak_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perak_10, 
                style: style_Perak_10,
                popuplayertitle: 'Perak',
                interactive: true,
                title: '<img src="styles/legend/Perak_10.png" /> Perak'
            });
var format_PasirBesi_11 = new ol.format.GeoJSON();
var features_PasirBesi_11 = format_PasirBesi_11.readFeatures(json_PasirBesi_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PasirBesi_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PasirBesi_11.addFeatures(features_PasirBesi_11);
var lyr_PasirBesi_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PasirBesi_11, 
                style: style_PasirBesi_11,
                popuplayertitle: 'Pasir Besi',
                interactive: true,
                title: '<img src="styles/legend/PasirBesi_11.png" /> Pasir Besi'
            });
var format_Nikel_12 = new ol.format.GeoJSON();
var features_Nikel_12 = format_Nikel_12.readFeatures(json_Nikel_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nikel_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nikel_12.addFeatures(features_Nikel_12);
var lyr_Nikel_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nikel_12, 
                style: style_Nikel_12,
                popuplayertitle: 'Nikel',
                interactive: true,
                title: '<img src="styles/legend/Nikel_12.png" /> Nikel'
            });
var format_Monasit_13 = new ol.format.GeoJSON();
var features_Monasit_13 = format_Monasit_13.readFeatures(json_Monasit_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monasit_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monasit_13.addFeatures(features_Monasit_13);
var lyr_Monasit_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monasit_13, 
                style: style_Monasit_13,
                popuplayertitle: 'Monasit',
                interactive: true,
                title: '<img src="styles/legend/Monasit_13.png" /> Monasit'
            });
var format_Molibdenum_14 = new ol.format.GeoJSON();
var features_Molibdenum_14 = format_Molibdenum_14.readFeatures(json_Molibdenum_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Molibdenum_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Molibdenum_14.addFeatures(features_Molibdenum_14);
var lyr_Molibdenum_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Molibdenum_14, 
                style: style_Molibdenum_14,
                popuplayertitle: 'Molibdenum',
                interactive: true,
                title: '<img src="styles/legend/Molibdenum_14.png" /> Molibdenum'
            });
var format_Mangan_15 = new ol.format.GeoJSON();
var features_Mangan_15 = format_Mangan_15.readFeatures(json_Mangan_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mangan_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mangan_15.addFeatures(features_Mangan_15);
var lyr_Mangan_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mangan_15, 
                style: style_Mangan_15,
                popuplayertitle: 'Mangan',
                interactive: true,
                title: '<img src="styles/legend/Mangan_15.png" /> Mangan'
            });
var format_KromitPlaser_16 = new ol.format.GeoJSON();
var features_KromitPlaser_16 = format_KromitPlaser_16.readFeatures(json_KromitPlaser_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KromitPlaser_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KromitPlaser_16.addFeatures(features_KromitPlaser_16);
var lyr_KromitPlaser_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KromitPlaser_16, 
                style: style_KromitPlaser_16,
                popuplayertitle: 'Kromit Plaser',
                interactive: true,
                title: '<img src="styles/legend/KromitPlaser_16.png" /> Kromit Plaser'
            });
var format_Kromit_17 = new ol.format.GeoJSON();
var features_Kromit_17 = format_Kromit_17.readFeatures(json_Kromit_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kromit_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kromit_17.addFeatures(features_Kromit_17);
var lyr_Kromit_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kromit_17, 
                style: style_Kromit_17,
                popuplayertitle: 'Kromit',
                interactive: true,
                title: '<img src="styles/legend/Kromit_17.png" /> Kromit'
            });
var format_Kobal_18 = new ol.format.GeoJSON();
var features_Kobal_18 = format_Kobal_18.readFeatures(json_Kobal_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kobal_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kobal_18.addFeatures(features_Kobal_18);
var lyr_Kobal_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kobal_18, 
                style: style_Kobal_18,
                popuplayertitle: 'Kobal',
                interactive: true,
                title: '<img src="styles/legend/Kobal_18.png" /> Kobal'
            });
var format_EmasPrimer_19 = new ol.format.GeoJSON();
var features_EmasPrimer_19 = format_EmasPrimer_19.readFeatures(json_EmasPrimer_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmasPrimer_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmasPrimer_19.addFeatures(features_EmasPrimer_19);
var lyr_EmasPrimer_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmasPrimer_19, 
                style: style_EmasPrimer_19,
                popuplayertitle: 'Emas Primer',
                interactive: true,
                title: '<img src="styles/legend/EmasPrimer_19.png" /> Emas Primer'
            });
var format_BesiSedimen_20 = new ol.format.GeoJSON();
var features_BesiSedimen_20 = format_BesiSedimen_20.readFeatures(json_BesiSedimen_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BesiSedimen_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BesiSedimen_20.addFeatures(features_BesiSedimen_20);
var lyr_BesiSedimen_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BesiSedimen_20, 
                style: style_BesiSedimen_20,
                popuplayertitle: 'Besi Sedimen',
                interactive: true,
                title: '<img src="styles/legend/BesiSedimen_20.png" /> Besi Sedimen'
            });
var format_BesiPrimer_21 = new ol.format.GeoJSON();
var features_BesiPrimer_21 = format_BesiPrimer_21.readFeatures(json_BesiPrimer_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BesiPrimer_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BesiPrimer_21.addFeatures(features_BesiPrimer_21);
var lyr_BesiPrimer_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BesiPrimer_21, 
                style: style_BesiPrimer_21,
                popuplayertitle: 'Besi Primer',
                interactive: true,
                title: '<img src="styles/legend/BesiPrimer_21.png" /> Besi Primer'
            });
var format_BesiLaterit_22 = new ol.format.GeoJSON();
var features_BesiLaterit_22 = format_BesiLaterit_22.readFeatures(json_BesiLaterit_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BesiLaterit_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BesiLaterit_22.addFeatures(features_BesiLaterit_22);
var lyr_BesiLaterit_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BesiLaterit_22, 
                style: style_BesiLaterit_22,
                popuplayertitle: 'Besi Laterit',
                interactive: true,
                title: '<img src="styles/legend/BesiLaterit_22.png" /> Besi Laterit'
            });
var format_AirRaksa_23 = new ol.format.GeoJSON();
var features_AirRaksa_23 = format_AirRaksa_23.readFeatures(json_AirRaksa_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AirRaksa_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirRaksa_23.addFeatures(features_AirRaksa_23);
var lyr_AirRaksa_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AirRaksa_23, 
                style: style_AirRaksa_23,
                popuplayertitle: 'Air Raksa',
                interactive: true,
                title: '<img src="styles/legend/AirRaksa_23.png" /> Air Raksa'
            });

lyr_GoogleStreet_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_Xenotim_2.setVisible(true);lyr_TitanPlaser_3.setVisible(true);lyr_TitanLaterit_4.setVisible(true);lyr_Timbal_5.setVisible(true);lyr_Timah_6.setVisible(true);lyr_Tembaga_7.setVisible(true);lyr_Seng_8.setVisible(true);lyr_Platina_9.setVisible(true);lyr_Perak_10.setVisible(true);lyr_PasirBesi_11.setVisible(true);lyr_Nikel_12.setVisible(true);lyr_Monasit_13.setVisible(true);lyr_Molibdenum_14.setVisible(true);lyr_Mangan_15.setVisible(true);lyr_KromitPlaser_16.setVisible(true);lyr_Kromit_17.setVisible(true);lyr_Kobal_18.setVisible(true);lyr_EmasPrimer_19.setVisible(true);lyr_BesiSedimen_20.setVisible(true);lyr_BesiPrimer_21.setVisible(true);lyr_BesiLaterit_22.setVisible(true);lyr_AirRaksa_23.setVisible(true);
var layersList = [lyr_GoogleStreet_0,lyr_GoogleSatellite_1,lyr_Xenotim_2,lyr_TitanPlaser_3,lyr_TitanLaterit_4,lyr_Timbal_5,lyr_Timah_6,lyr_Tembaga_7,lyr_Seng_8,lyr_Platina_9,lyr_Perak_10,lyr_PasirBesi_11,lyr_Nikel_12,lyr_Monasit_13,lyr_Molibdenum_14,lyr_Mangan_15,lyr_KromitPlaser_16,lyr_Kromit_17,lyr_Kobal_18,lyr_EmasPrimer_19,lyr_BesiSedimen_20,lyr_BesiPrimer_21,lyr_BesiLaterit_22,lyr_AirRaksa_23];
lyr_Xenotim_2.set('fieldAliases', {'Komoditas': 'Komoditas', 'Unsur': 'Unsur', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Lokasi': 'Lokasi', 'Status': 'Status', 'Bjh_Hipo': 'Bjh_Hipo', 'Lgm_Hipo': 'Lgm_Hipo', 'Bjh_Reka': 'Bjh_Reka', 'Lgm_Reka': 'Lgm_Reka', 'Bjh_Kira': 'Bjh_Kira', 'Lgm_Kira': 'Lgm_Kira', 'Bjh_Unjk': 'Bjh_Unjk', 'Lgm_Unjk': 'Lgm_Unjk', 'Bjh_Ukur': 'Bjh_Ukur', 'Lgm_Ukur': 'Lgm_Ukur', 'Bjh_Bkti': 'Bjh_Bkti', 'Lgm_Bkti': 'Lgm_Bkti', 'Remark': 'Remark', 'Referensi': 'Referensi', 'Maps': 'Maps', });
lyr_TitanPlaser_3.set('fieldAliases', {'Komoditas': 'Komoditas', 'Unsur': 'Unsur', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Lokasi': 'Lokasi', 'Status': 'Status', 'Bjh_Hipo': 'Bjh_Hipo', 'Lgm_Hipo': 'Lgm_Hipo', 'Bjh_Reka': 'Bjh_Reka', 'Lgm_Reka': 'Lgm_Reka', 'Bjh_Kira': 'Bjh_Kira', 'Lgm_Kira': 'Lgm_Kira', 'Bjh_Unjk': 'Bjh_Unjk', 'Lgm_Unjk': 'Lgm_Unjk', 'Bjh_Ukur': 'Bjh_Ukur', 'Lgm_Ukur': 'Lgm_Ukur', 'Bjh_Bkti': 'Bjh_Bkti', 'Lgm_Bkti': 'Lgm_Bkti', 'Remark': 'Remark', 'Referensi': 'Referensi', 'Maps': 'Maps', });
lyr_TitanLaterit_4.set('fieldAliases', {'Komoditas': 'Komoditas', 'Unsur': 'Unsur', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Lokasi': 'Lokasi', 'Status': 'Status', 'Bjh_Hipo': 'Bjh_Hipo', 'Lgm_Hipo': 'Lgm_Hipo', 'Bjh_Reka': 'Bjh_Reka', 'Lgm_Reka': 'Lgm_Reka', 'Bjh_Kira': 'Bjh_Kira', 'Lgm_Kira': 'Lgm_Kira', 'Bjh_Unjk': 'Bjh_Unjk', 'Lgm_Unjk': 'Lgm_Unjk', 'Bjh_Ukur': 'Bjh_Ukur', 'Lgm_Ukur': 'Lgm_Ukur', 'Bjh_Bkti': 'Bjh_Bkti', 'Lgm_Bkti': 'Lgm_Bkti', 'Remark': 'Remark', 'Referensi': 'Referensi', 'Maps': 'Maps', });
lyr_Timbal_5.set('fieldAliases', {'Komoditas': 'Komoditas', 'Unsur': 'Unsur', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Lokasi': 'Lokasi', 'Status': 'Status', 'Bjh_Hipo': 'Bjh_Hipo', 'Lgm_Hipo': 'Lgm_Hipo', 'Bjh_Reka': 'Bjh_Reka', 'Lgm_Reka': 'Lgm_Reka', 'Bjh_Kira': 'Bjh_Kira', 'Lgm_Kira': 'Lgm_Kira', 'Bjh_Unjk': 'Bjh_Unjk', 'Lgm_Unjk': 'Lgm_Unjk', 'Bjh_Ukur': 'Bjh_Ukur', 'Lgm_Ukur': 'Lgm_Ukur', 'Bjh_Bkti': 'Bjh_Bkti', 'Lgm_Bkti': 'Lgm_Bkti', 'Remark': 'Remark', 'Referensi': 'Referensi', 'Maps': 'Maps', });
lyr_Timah_6.set('fieldAliases', {'Komoditas': 'Komoditas', 'Unsur': 'Unsur', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Lokasi': 'Lokasi', 'Status': 'Status', 'Bjh_Hipo': 'Bjh_Hipo', 'Lgm_Hipo': 'Lgm_Hipo', 'Bjh_Reka': 'Bjh_Reka', 'Lgm_Reka': 'Lgm_Reka', 'Bjh_Kira': 'Bjh_Kira', 'Lgm_Kira': 'Lgm_Kira', 'Bjh_Unjk': 'Bjh_Unjk', 'Lgm_Unjk': 'Lgm_Unjk', 'Bjh_Ukur': 'Bjh_Ukur', 'Lgm_Ukur': 'Lgm_Ukur', 'Bjh_Bkti': 'Bjh_Bkti', 'Lgm_Bkti': 'Lgm_Bkti', 'Remark': 'Remark', 'Referensi': 'Referensi', 'Maps': 'Maps', });
lyr_Tembaga_7.set('fieldAliases', {'Komoditas': 'Komoditas', 'Unsur': 'Unsur', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Lokasi': 'Lokasi', 'Status': 'Status', 'Bjh_Hipo': 'Bjh_Hipo', 'Lgm_Hipo': 'Lgm_Hipo', 'Bjh_Reka': 'Bjh_Reka', 'Lgm_Reka': 'Lgm_Reka', 'Bjh_Kira': 'Bjh_Kira', 'Lgm_Kira': 'Lgm_Kira', 'Bjh_Unjk': 'Bjh_Unjk', 'Lgm_Unjk': 'Lgm_Unjk', 'Bjh_Ukur': 'Bjh_Ukur', 'Lgm_Ukur': 'Lgm_Ukur', 'Bjh_Bkti': 'Bjh_Bkti', 'Lgm_Bkti': 'Lgm_Bkti', 'Remark': 'Remark', 'Referensi': 'Referensi', 'Maps': 'Maps', });
lyr_Seng_8.set('fieldAliases', {'Komoditas': 'Komoditas', 'Unsur': 'Unsur', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Lokasi': 'Lokasi', 'Status': 'Status', 'Bjh_Hipo': 'Bjh_Hipo', 'Lgm_Hipo': 'Lgm_Hipo', 'Bjh_Reka': 'Bjh_Reka', 'Lgm_Reka': 'Lgm_Reka', 'Bjh_Kira': 'Bjh_Kira', 'Lgm_Kira': 'Lgm_Kira', 'Bjh_Unjk': 'Bjh_Unjk', 'Lgm_Unjk': 'Lgm_Unjk', 'Bjh_Ukur': 'Bjh_Ukur', 'Lgm_Ukur': 'Lgm_Ukur', 'Bjh_Bkti': 'Bjh_Bkti', 'Lgm_Bkti': 'Lgm_Bkti', 'Remark': 'Remark', 'Referensi': 'Referensi', 'Maps': 'Maps', });
lyr_Platina_9.set('fieldAliases', {'Komoditas': 'Komoditas', 'Unsur': 'Unsur', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Lokasi': 'Lokasi', 'Status': 'Status', 'Bjh_Hipo': 'Bjh_Hipo', 'Lgm_Hipo': 'Lgm_Hipo', 'Bjh_Reka': 'Bjh_Reka', 'Lgm_Reka': 'Lgm_Reka', 'Bjh_Kira': 'Bjh_Kira', 'Lgm_Kira': 'Lgm_Kira', 'Bjh_Unjk': 'Bjh_Unjk', 'Lgm_Unjk': 'Lgm_Unjk', 'Bjh_Ukur': 'Bjh_Ukur', 'Lgm_Ukur': 'Lgm_Ukur', 'Bjh_Bkti': 'Bjh_Bkti', 'Lgm_Bkti': 'Lgm_Bkti', 'Remark': 'Remark', 'Referensi': 'Referensi', 'Maps': 'Maps', });
lyr_Perak_10.set('fieldAliases', {'Komoditas': 'Komoditas', 'Unsur': 'Unsur', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Lokasi': 'Lokasi', 'Status': 'Status', 'Bjh_Hipo': 'Bjh_Hipo', 'Lgm_Hipo': 'Lgm_Hipo', 'Bjh_Reka': 'Bjh_Reka', 'Lgm_Reka': 'Lgm_Reka', 'Bjh_Kira': 'Bjh_Kira', 'Lgm_Kira': 'Lgm_Kira', 'Bjh_Unjk': 'Bjh_Unjk', 'Lgm_Unjk': 'Lgm_Unjk', 'Bjh_Ukur': 'Bjh_Ukur', 'Lgm_Ukur': 'Lgm_Ukur', 'Bjh_Bkti': 'Bjh_Bkti', 'Lgm_Bkti': 'Lgm_Bkti', 'Remark': 'Remark', 'Referensi': 'Referensi', 'Maps': 'Maps', });
lyr_PasirBesi_11.set('fieldAliases', {'Komoditas': 'Komoditas', 'Unsur': 'Unsur', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Lokasi': 'Lokasi', 'Status': 'Status', 'Bjh_Hipo': 'Bjh_Hipo', 'Lgm_Hipo': 'Lgm_Hipo', 'Bjh_Reka': 'Bjh_Reka', 'Lgm_Reka': 'Lgm_Reka', 'Bjh_Kira': 'Bjh_Kira', 'Lgm_Kira': 'Lgm_Kira', 'Bjh_Unjk': 'Bjh_Unjk', 'Lgm_Unjk': 'Lgm_Unjk', 'Bjh_Ukur': 'Bjh_Ukur', 'Lgm_Ukur': 'Lgm_Ukur', 'Bjh_Bkti': 'Bjh_Bkti', 'Lgm_Bkti': 'Lgm_Bkti', 'Remark': 'Remark', 'Referensi': 'Referensi', 'Maps': 'Maps', });
lyr_Nikel_12.set('fieldAliases', {'Komoditas': 'Komoditas', 'Unsur': 'Unsur', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Lokasi': 'Lokasi', 'Status': 'Status', 'Bjh_Hipo': 'Bjh_Hipo', 'Lgm_Hipo': 'Lgm_Hipo', 'Bjh_Reka': 'Bjh_Reka', 'Lgm_Reka': 'Lgm_Reka', 'Bjh_Kira': 'Bjh_Kira', 'Lgm_Kira': 'Lgm_Kira', 'Bjh_Unjk': 'Bjh_Unjk', 'Lgm_Unjk': 'Lgm_Unjk', 'Bjh_Ukur': 'Bjh_Ukur', 'Lgm_Ukur': 'Lgm_Ukur', 'Bjh_Bkti': 'Bjh_Bkti', 'Lgm_Bkti': 'Lgm_Bkti', 'Remark': 'Remark', 'Referensi': 'Referensi', 'Maps': 'Maps', });
lyr_Monasit_13.set('fieldAliases', {'Komoditas': 'Komoditas', 'Unsur': 'Unsur', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Lokasi': 'Lokasi', 'Status': 'Status', 'Bjh_Hipo': 'Bjh_Hipo', 'Lgm_Hipo': 'Lgm_Hipo', 'Bjh_Reka': 'Bjh_Reka', 'Lgm_Reka': 'Lgm_Reka', 'Bjh_Kira': 'Bjh_Kira', 'Lgm_Kira': 'Lgm_Kira', 'Bjh_Unjk': 'Bjh_Unjk', 'Lgm_Unjk': 'Lgm_Unjk', 'Bjh_Ukur': 'Bjh_Ukur', 'Lgm_Ukur': 'Lgm_Ukur', 'Bjh_Bkti': 'Bjh_Bkti', 'Lgm_Bkti': 'Lgm_Bkti', 'Remark': 'Remark', 'Referensi': 'Referensi', 'Maps': 'Maps', });
lyr_Molibdenum_14.set('fieldAliases', {'Komoditas': 'Komoditas', 'Unsur': 'Unsur', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Lokasi': 'Lokasi', 'Status': 'Status', 'Bjh_Hipo': 'Bjh_Hipo', 'Lgm_Hipo': 'Lgm_Hipo', 'Bjh_Reka': 'Bjh_Reka', 'Lgm_Reka': 'Lgm_Reka', 'Bjh_Kira': 'Bjh_Kira', 'Lgm_Kira': 'Lgm_Kira', 'Bjh_Unjk': 'Bjh_Unjk', 'Lgm_Unjk': 'Lgm_Unjk', 'Bjh_Ukur': 'Bjh_Ukur', 'Lgm_Ukur': 'Lgm_Ukur', 'Bjh_Bkti': 'Bjh_Bkti', 'Lgm_Bkti': 'Lgm_Bkti', 'Remark': 'Remark', 'Referensi': 'Referensi', 'Maps': 'Maps', });
lyr_Mangan_15.set('fieldAliases', {'Komoditas': 'Komoditas', 'Unsur': 'Unsur', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Lokasi': 'Lokasi', 'Status': 'Status', 'Bjh_Hipo': 'Bjh_Hipo', 'Lgm_Hipo': 'Lgm_Hipo', 'Bjh_Reka': 'Bjh_Reka', 'Lgm_Reka': 'Lgm_Reka', 'Bjh_Kira': 'Bjh_Kira', 'Lgm_Kira': 'Lgm_Kira', 'Bjh_Unjk': 'Bjh_Unjk', 'Lgm_Unjk': 'Lgm_Unjk', 'Bjh_Ukur': 'Bjh_Ukur', 'Lgm_Ukur': 'Lgm_Ukur', 'Bjh_Bkti': 'Bjh_Bkti', 'Lgm_Bkti': 'Lgm_Bkti', 'Remark': 'Remark', 'Referensi': 'Referensi', 'Maps': 'Maps', });
lyr_KromitPlaser_16.set('fieldAliases', {'Komoditas': 'Komoditas', 'Unsur': 'Unsur', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Lokasi': 'Lokasi', 'Status': 'Status', 'Bjh_Hipo': 'Bjh_Hipo', 'Lgm_Hipo': 'Lgm_Hipo', 'Bjh_Reka': 'Bjh_Reka', 'Lgm_Reka': 'Lgm_Reka', 'Bjh_Kira': 'Bjh_Kira', 'Lgm_Kira': 'Lgm_Kira', 'Bjh_Unjk': 'Bjh_Unjk', 'Lgm_Unjk': 'Lgm_Unjk', 'Bjh_Ukur': 'Bjh_Ukur', 'Lgm_Ukur': 'Lgm_Ukur', 'Bjh_Bkti': 'Bjh_Bkti', 'Lgm_Bkti': 'Lgm_Bkti', 'Remark': 'Remark', 'Referensi': 'Referensi', 'Maps': 'Maps', });
lyr_Kromit_17.set('fieldAliases', {'Komoditas': 'Komoditas', 'Unsur': 'Unsur', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Lokasi': 'Lokasi', 'Status': 'Status', 'Bjh_Hipo': 'Bjh_Hipo', 'Lgm_Hipo': 'Lgm_Hipo', 'Bjh_Reka': 'Bjh_Reka', 'Lgm_Reka': 'Lgm_Reka', 'Bjh_Kira': 'Bjh_Kira', 'Lgm_Kira': 'Lgm_Kira', 'Bjh_Unjk': 'Bjh_Unjk', 'Lgm_Unjk': 'Lgm_Unjk', 'Bjh_Ukur': 'Bjh_Ukur', 'Lgm_Ukur': 'Lgm_Ukur', 'Bjh_Bkti': 'Bjh_Bkti', 'Lgm_Bkti': 'Lgm_Bkti', 'Remark': 'Remark', 'Referensi': 'Referensi', 'Maps': 'Maps', });
lyr_Kobal_18.set('fieldAliases', {'Komoditas': 'Komoditas', 'Unsur': 'Unsur', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Lokasi': 'Lokasi', 'Status': 'Status', 'Bjh_Hipo': 'Bjh_Hipo', 'Lgm_Hipo': 'Lgm_Hipo', 'Bjh_Reka': 'Bjh_Reka', 'Lgm_Reka': 'Lgm_Reka', 'Bjh_Kira': 'Bjh_Kira', 'Lgm_Kira': 'Lgm_Kira', 'Bjh_Unjk': 'Bjh_Unjk', 'Lgm_Unjk': 'Lgm_Unjk', 'Bjh_Ukur': 'Bjh_Ukur', 'Lgm_Ukur': 'Lgm_Ukur', 'Bjh_Bkti': 'Bjh_Bkti', 'Lgm_Bkti': 'Lgm_Bkti', 'Remark': 'Remark', 'Referensi': 'Referensi', 'Maps': 'Maps', });
lyr_EmasPrimer_19.set('fieldAliases', {'Komoditas': 'Komoditas', 'Unsur': 'Unsur', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Lokasi': 'Lokasi', 'Status': 'Status', 'Bjh_Hipo': 'Bjh_Hipo', 'Lgm_Hipo': 'Lgm_Hipo', 'Bjh_Reka': 'Bjh_Reka', 'Lgm_Reka': 'Lgm_Reka', 'Bjh_Kira': 'Bjh_Kira', 'Lgm_Kira': 'Lgm_Kira', 'Bjh_Unjk': 'Bjh_Unjk', 'Lgm_Unjk': 'Lgm_Unjk', 'Bjh_Ukur': 'Bjh_Ukur', 'Lgm_Ukur': 'Lgm_Ukur', 'Bjh_Bkti': 'Bjh_Bkti', 'Lgm_Bkti': 'Lgm_Bkti', 'Remark': 'Remark', 'Referensi': 'Referensi', 'Maps': 'Maps', });
lyr_BesiSedimen_20.set('fieldAliases', {'Komoditas': 'Komoditas', 'Unsur': 'Unsur', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Lokasi': 'Lokasi', 'Status': 'Status', 'Bjh_Hipo': 'Bjh_Hipo', 'Lgm_Hipo': 'Lgm_Hipo', 'Bjh_Reka': 'Bjh_Reka', 'Lgm_Reka': 'Lgm_Reka', 'Bjh_Kira': 'Bjh_Kira', 'Lgm_Kira': 'Lgm_Kira', 'Bjh_Unjk': 'Bjh_Unjk', 'Lgm_Unjk': 'Lgm_Unjk', 'Bjh_Ukur': 'Bjh_Ukur', 'Lgm_Ukur': 'Lgm_Ukur', 'Bjh_Bkti': 'Bjh_Bkti', 'Lgm_Bkti': 'Lgm_Bkti', 'Remark': 'Remark', 'Referensi': 'Referensi', 'Maps': 'Maps', });
lyr_BesiPrimer_21.set('fieldAliases', {'Komoditas': 'Komoditas', 'Unsur': 'Unsur', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Lokasi': 'Lokasi', 'Status': 'Status', 'Bjh_Hipo': 'Bjh_Hipo', 'Lgm_Hipo': 'Lgm_Hipo', 'Bjh_Reka': 'Bjh_Reka', 'Lgm_Reka': 'Lgm_Reka', 'Bjh_Kira': 'Bjh_Kira', 'Lgm_Kira': 'Lgm_Kira', 'Bjh_Unjk': 'Bjh_Unjk', 'Lgm_Unjk': 'Lgm_Unjk', 'Bjh_Ukur': 'Bjh_Ukur', 'Lgm_Ukur': 'Lgm_Ukur', 'Bjh_Bkti': 'Bjh_Bkti', 'Lgm_Bkti': 'Lgm_Bkti', 'Remark': 'Remark', 'Referensi': 'Referensi', 'Maps': 'Maps', });
lyr_BesiLaterit_22.set('fieldAliases', {'Komoditas': 'Komoditas', 'Unsur': 'Unsur', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Lokasi': 'Lokasi', 'Status': 'Status', 'Bjh_Hipo': 'Bjh_Hipo', 'Lgm_Hipo': 'Lgm_Hipo', 'Bjh_Reka': 'Bjh_Reka', 'Lgm_Reka': 'Lgm_Reka', 'Bjh_Kira': 'Bjh_Kira', 'Lgm_Kira': 'Lgm_Kira', 'Bjh_Unjk': 'Bjh_Unjk', 'Lgm_Unjk': 'Lgm_Unjk', 'Bjh_Ukur': 'Bjh_Ukur', 'Lgm_Ukur': 'Lgm_Ukur', 'Bjh_Bkti': 'Bjh_Bkti', 'Lgm_Bkti': 'Lgm_Bkti', 'Remark': 'Remark', 'Referensi': 'Referensi', 'Maps': 'Maps', });
lyr_AirRaksa_23.set('fieldAliases', {'Komoditas': 'Komoditas', 'Unsur': 'Unsur', 'Provinsi': 'Provinsi', 'Kabupaten': 'Kabupaten', 'Kecamatan': 'Kecamatan', 'Lokasi': 'Lokasi', 'Status': 'Status', 'Bjh_Hipo': 'Bjh_Hipo', 'Lgm_Hipo': 'Lgm_Hipo', 'Bjh_Reka': 'Bjh_Reka', 'Lgm_Reka': 'Lgm_Reka', 'Bjh_Kira': 'Bjh_Kira', 'Lgm_Kira': 'Lgm_Kira', 'Bjh_Unjk': 'Bjh_Unjk', 'Lgm_Unjk': 'Lgm_Unjk', 'Bjh_Ukur': 'Bjh_Ukur', 'Lgm_Ukur': 'Lgm_Ukur', 'Bjh_Bkti': 'Bjh_Bkti', 'Lgm_Bkti': 'Lgm_Bkti', 'Remark': 'Remark', 'Referensi': 'Referensi', 'Maps': 'Maps', });
lyr_Xenotim_2.set('fieldImages', {'Komoditas': 'TextEdit', 'Unsur': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kecamatan': 'TextEdit', 'Lokasi': 'TextEdit', 'Status': 'TextEdit', 'Bjh_Hipo': 'TextEdit', 'Lgm_Hipo': 'TextEdit', 'Bjh_Reka': 'TextEdit', 'Lgm_Reka': 'TextEdit', 'Bjh_Kira': 'TextEdit', 'Lgm_Kira': 'TextEdit', 'Bjh_Unjk': 'TextEdit', 'Lgm_Unjk': 'TextEdit', 'Bjh_Ukur': 'TextEdit', 'Lgm_Ukur': 'TextEdit', 'Bjh_Bkti': 'TextEdit', 'Lgm_Bkti': 'TextEdit', 'Remark': 'TextEdit', 'Referensi': 'TextEdit', 'Maps': 'TextEdit', });
lyr_TitanPlaser_3.set('fieldImages', {'Komoditas': 'TextEdit', 'Unsur': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kecamatan': 'TextEdit', 'Lokasi': 'TextEdit', 'Status': 'TextEdit', 'Bjh_Hipo': 'TextEdit', 'Lgm_Hipo': 'TextEdit', 'Bjh_Reka': 'TextEdit', 'Lgm_Reka': 'TextEdit', 'Bjh_Kira': 'TextEdit', 'Lgm_Kira': 'TextEdit', 'Bjh_Unjk': 'TextEdit', 'Lgm_Unjk': 'TextEdit', 'Bjh_Ukur': 'TextEdit', 'Lgm_Ukur': 'TextEdit', 'Bjh_Bkti': 'TextEdit', 'Lgm_Bkti': 'TextEdit', 'Remark': 'TextEdit', 'Referensi': 'TextEdit', 'Maps': 'TextEdit', });
lyr_TitanLaterit_4.set('fieldImages', {'Komoditas': 'TextEdit', 'Unsur': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kecamatan': 'TextEdit', 'Lokasi': 'TextEdit', 'Status': 'TextEdit', 'Bjh_Hipo': 'TextEdit', 'Lgm_Hipo': 'TextEdit', 'Bjh_Reka': 'TextEdit', 'Lgm_Reka': 'TextEdit', 'Bjh_Kira': 'TextEdit', 'Lgm_Kira': 'TextEdit', 'Bjh_Unjk': 'TextEdit', 'Lgm_Unjk': 'TextEdit', 'Bjh_Ukur': 'TextEdit', 'Lgm_Ukur': 'TextEdit', 'Bjh_Bkti': 'TextEdit', 'Lgm_Bkti': 'TextEdit', 'Remark': 'TextEdit', 'Referensi': 'TextEdit', 'Maps': 'TextEdit', });
lyr_Timbal_5.set('fieldImages', {'Komoditas': 'TextEdit', 'Unsur': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kecamatan': 'TextEdit', 'Lokasi': 'TextEdit', 'Status': 'TextEdit', 'Bjh_Hipo': 'TextEdit', 'Lgm_Hipo': 'TextEdit', 'Bjh_Reka': 'TextEdit', 'Lgm_Reka': 'TextEdit', 'Bjh_Kira': 'TextEdit', 'Lgm_Kira': 'TextEdit', 'Bjh_Unjk': 'TextEdit', 'Lgm_Unjk': 'TextEdit', 'Bjh_Ukur': 'TextEdit', 'Lgm_Ukur': 'TextEdit', 'Bjh_Bkti': 'TextEdit', 'Lgm_Bkti': 'TextEdit', 'Remark': 'TextEdit', 'Referensi': 'TextEdit', 'Maps': 'TextEdit', });
lyr_Timah_6.set('fieldImages', {'Komoditas': 'TextEdit', 'Unsur': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kecamatan': 'TextEdit', 'Lokasi': 'TextEdit', 'Status': 'TextEdit', 'Bjh_Hipo': 'TextEdit', 'Lgm_Hipo': 'TextEdit', 'Bjh_Reka': 'TextEdit', 'Lgm_Reka': 'TextEdit', 'Bjh_Kira': 'TextEdit', 'Lgm_Kira': 'TextEdit', 'Bjh_Unjk': 'TextEdit', 'Lgm_Unjk': 'TextEdit', 'Bjh_Ukur': 'TextEdit', 'Lgm_Ukur': 'TextEdit', 'Bjh_Bkti': 'TextEdit', 'Lgm_Bkti': 'TextEdit', 'Remark': 'TextEdit', 'Referensi': 'TextEdit', 'Maps': 'TextEdit', });
lyr_Tembaga_7.set('fieldImages', {'Komoditas': 'TextEdit', 'Unsur': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kecamatan': 'TextEdit', 'Lokasi': 'TextEdit', 'Status': 'TextEdit', 'Bjh_Hipo': 'TextEdit', 'Lgm_Hipo': 'TextEdit', 'Bjh_Reka': 'TextEdit', 'Lgm_Reka': 'TextEdit', 'Bjh_Kira': 'TextEdit', 'Lgm_Kira': 'TextEdit', 'Bjh_Unjk': 'TextEdit', 'Lgm_Unjk': 'TextEdit', 'Bjh_Ukur': 'TextEdit', 'Lgm_Ukur': 'TextEdit', 'Bjh_Bkti': 'TextEdit', 'Lgm_Bkti': 'TextEdit', 'Remark': 'TextEdit', 'Referensi': 'TextEdit', 'Maps': 'TextEdit', });
lyr_Seng_8.set('fieldImages', {'Komoditas': 'TextEdit', 'Unsur': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kecamatan': 'TextEdit', 'Lokasi': 'TextEdit', 'Status': 'TextEdit', 'Bjh_Hipo': 'TextEdit', 'Lgm_Hipo': 'TextEdit', 'Bjh_Reka': 'TextEdit', 'Lgm_Reka': 'TextEdit', 'Bjh_Kira': 'TextEdit', 'Lgm_Kira': 'TextEdit', 'Bjh_Unjk': 'TextEdit', 'Lgm_Unjk': 'TextEdit', 'Bjh_Ukur': 'TextEdit', 'Lgm_Ukur': 'TextEdit', 'Bjh_Bkti': 'TextEdit', 'Lgm_Bkti': 'TextEdit', 'Remark': 'TextEdit', 'Referensi': 'TextEdit', 'Maps': 'TextEdit', });
lyr_Platina_9.set('fieldImages', {'Komoditas': 'TextEdit', 'Unsur': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kecamatan': 'TextEdit', 'Lokasi': 'TextEdit', 'Status': 'TextEdit', 'Bjh_Hipo': 'TextEdit', 'Lgm_Hipo': 'TextEdit', 'Bjh_Reka': 'TextEdit', 'Lgm_Reka': 'TextEdit', 'Bjh_Kira': 'TextEdit', 'Lgm_Kira': 'TextEdit', 'Bjh_Unjk': 'TextEdit', 'Lgm_Unjk': 'TextEdit', 'Bjh_Ukur': 'TextEdit', 'Lgm_Ukur': 'TextEdit', 'Bjh_Bkti': 'TextEdit', 'Lgm_Bkti': 'TextEdit', 'Remark': 'TextEdit', 'Referensi': 'TextEdit', 'Maps': 'TextEdit', });
lyr_Perak_10.set('fieldImages', {'Komoditas': 'TextEdit', 'Unsur': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kecamatan': 'TextEdit', 'Lokasi': 'TextEdit', 'Status': 'TextEdit', 'Bjh_Hipo': 'TextEdit', 'Lgm_Hipo': 'TextEdit', 'Bjh_Reka': 'TextEdit', 'Lgm_Reka': 'TextEdit', 'Bjh_Kira': 'TextEdit', 'Lgm_Kira': 'TextEdit', 'Bjh_Unjk': 'TextEdit', 'Lgm_Unjk': 'TextEdit', 'Bjh_Ukur': 'TextEdit', 'Lgm_Ukur': 'TextEdit', 'Bjh_Bkti': 'TextEdit', 'Lgm_Bkti': 'TextEdit', 'Remark': 'TextEdit', 'Referensi': 'TextEdit', 'Maps': 'TextEdit', });
lyr_PasirBesi_11.set('fieldImages', {'Komoditas': 'TextEdit', 'Unsur': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kecamatan': 'TextEdit', 'Lokasi': 'TextEdit', 'Status': 'TextEdit', 'Bjh_Hipo': 'TextEdit', 'Lgm_Hipo': 'TextEdit', 'Bjh_Reka': 'TextEdit', 'Lgm_Reka': 'TextEdit', 'Bjh_Kira': 'TextEdit', 'Lgm_Kira': 'TextEdit', 'Bjh_Unjk': 'TextEdit', 'Lgm_Unjk': 'TextEdit', 'Bjh_Ukur': 'TextEdit', 'Lgm_Ukur': 'TextEdit', 'Bjh_Bkti': 'TextEdit', 'Lgm_Bkti': 'TextEdit', 'Remark': 'TextEdit', 'Referensi': 'TextEdit', 'Maps': 'TextEdit', });
lyr_Nikel_12.set('fieldImages', {'Komoditas': '', 'Unsur': '', 'Provinsi': '', 'Kabupaten': '', 'Kecamatan': '', 'Lokasi': '', 'Status': '', 'Bjh_Hipo': '', 'Lgm_Hipo': '', 'Bjh_Reka': '', 'Lgm_Reka': '', 'Bjh_Kira': '', 'Lgm_Kira': '', 'Bjh_Unjk': '', 'Lgm_Unjk': '', 'Bjh_Ukur': '', 'Lgm_Ukur': '', 'Bjh_Bkti': '', 'Lgm_Bkti': '', 'Remark': '', 'Referensi': '', 'Maps': '', });
lyr_Monasit_13.set('fieldImages', {'Komoditas': '', 'Unsur': '', 'Provinsi': '', 'Kabupaten': '', 'Kecamatan': '', 'Lokasi': '', 'Status': '', 'Bjh_Hipo': '', 'Lgm_Hipo': '', 'Bjh_Reka': '', 'Lgm_Reka': '', 'Bjh_Kira': '', 'Lgm_Kira': '', 'Bjh_Unjk': '', 'Lgm_Unjk': '', 'Bjh_Ukur': '', 'Lgm_Ukur': '', 'Bjh_Bkti': '', 'Lgm_Bkti': '', 'Remark': '', 'Referensi': '', 'Maps': '', });
lyr_Molibdenum_14.set('fieldImages', {'Komoditas': 'TextEdit', 'Unsur': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kecamatan': 'TextEdit', 'Lokasi': 'TextEdit', 'Status': 'TextEdit', 'Bjh_Hipo': 'TextEdit', 'Lgm_Hipo': 'TextEdit', 'Bjh_Reka': 'TextEdit', 'Lgm_Reka': 'TextEdit', 'Bjh_Kira': 'TextEdit', 'Lgm_Kira': 'TextEdit', 'Bjh_Unjk': 'TextEdit', 'Lgm_Unjk': 'TextEdit', 'Bjh_Ukur': 'TextEdit', 'Lgm_Ukur': 'TextEdit', 'Bjh_Bkti': 'TextEdit', 'Lgm_Bkti': 'TextEdit', 'Remark': 'TextEdit', 'Referensi': 'TextEdit', 'Maps': 'TextEdit', });
lyr_Mangan_15.set('fieldImages', {'Komoditas': 'TextEdit', 'Unsur': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kecamatan': 'TextEdit', 'Lokasi': 'TextEdit', 'Status': 'TextEdit', 'Bjh_Hipo': 'TextEdit', 'Lgm_Hipo': 'TextEdit', 'Bjh_Reka': 'TextEdit', 'Lgm_Reka': 'TextEdit', 'Bjh_Kira': 'TextEdit', 'Lgm_Kira': 'TextEdit', 'Bjh_Unjk': 'TextEdit', 'Lgm_Unjk': 'TextEdit', 'Bjh_Ukur': 'TextEdit', 'Lgm_Ukur': 'TextEdit', 'Bjh_Bkti': 'TextEdit', 'Lgm_Bkti': 'TextEdit', 'Remark': 'TextEdit', 'Referensi': 'TextEdit', 'Maps': 'TextEdit', });
lyr_KromitPlaser_16.set('fieldImages', {'Komoditas': '', 'Unsur': '', 'Provinsi': '', 'Kabupaten': '', 'Kecamatan': '', 'Lokasi': '', 'Status': '', 'Bjh_Hipo': '', 'Lgm_Hipo': '', 'Bjh_Reka': '', 'Lgm_Reka': '', 'Bjh_Kira': '', 'Lgm_Kira': '', 'Bjh_Unjk': '', 'Lgm_Unjk': '', 'Bjh_Ukur': '', 'Lgm_Ukur': '', 'Bjh_Bkti': '', 'Lgm_Bkti': '', 'Remark': '', 'Referensi': '', 'Maps': '', });
lyr_Kromit_17.set('fieldImages', {'Komoditas': 'TextEdit', 'Unsur': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kecamatan': 'TextEdit', 'Lokasi': 'TextEdit', 'Status': 'TextEdit', 'Bjh_Hipo': 'TextEdit', 'Lgm_Hipo': 'TextEdit', 'Bjh_Reka': 'TextEdit', 'Lgm_Reka': 'TextEdit', 'Bjh_Kira': 'TextEdit', 'Lgm_Kira': 'TextEdit', 'Bjh_Unjk': 'TextEdit', 'Lgm_Unjk': 'TextEdit', 'Bjh_Ukur': 'TextEdit', 'Lgm_Ukur': 'TextEdit', 'Bjh_Bkti': 'TextEdit', 'Lgm_Bkti': 'TextEdit', 'Remark': 'TextEdit', 'Referensi': 'TextEdit', 'Maps': 'TextEdit', });
lyr_Kobal_18.set('fieldImages', {'Komoditas': 'TextEdit', 'Unsur': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kecamatan': 'TextEdit', 'Lokasi': 'TextEdit', 'Status': 'TextEdit', 'Bjh_Hipo': 'TextEdit', 'Lgm_Hipo': 'TextEdit', 'Bjh_Reka': 'TextEdit', 'Lgm_Reka': 'TextEdit', 'Bjh_Kira': 'TextEdit', 'Lgm_Kira': 'TextEdit', 'Bjh_Unjk': 'TextEdit', 'Lgm_Unjk': 'TextEdit', 'Bjh_Ukur': 'TextEdit', 'Lgm_Ukur': 'TextEdit', 'Bjh_Bkti': 'TextEdit', 'Lgm_Bkti': 'TextEdit', 'Remark': 'TextEdit', 'Referensi': 'TextEdit', 'Maps': 'TextEdit', });
lyr_EmasPrimer_19.set('fieldImages', {'Komoditas': 'TextEdit', 'Unsur': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kecamatan': 'TextEdit', 'Lokasi': 'TextEdit', 'Status': 'TextEdit', 'Bjh_Hipo': 'TextEdit', 'Lgm_Hipo': 'TextEdit', 'Bjh_Reka': 'TextEdit', 'Lgm_Reka': 'TextEdit', 'Bjh_Kira': 'TextEdit', 'Lgm_Kira': 'TextEdit', 'Bjh_Unjk': 'TextEdit', 'Lgm_Unjk': 'TextEdit', 'Bjh_Ukur': 'TextEdit', 'Lgm_Ukur': 'TextEdit', 'Bjh_Bkti': 'TextEdit', 'Lgm_Bkti': 'TextEdit', 'Remark': 'TextEdit', 'Referensi': 'TextEdit', 'Maps': 'TextEdit', });
lyr_BesiSedimen_20.set('fieldImages', {'Komoditas': 'TextEdit', 'Unsur': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kecamatan': 'TextEdit', 'Lokasi': 'TextEdit', 'Status': 'TextEdit', 'Bjh_Hipo': 'TextEdit', 'Lgm_Hipo': 'TextEdit', 'Bjh_Reka': 'TextEdit', 'Lgm_Reka': 'TextEdit', 'Bjh_Kira': 'TextEdit', 'Lgm_Kira': 'TextEdit', 'Bjh_Unjk': 'TextEdit', 'Lgm_Unjk': 'TextEdit', 'Bjh_Ukur': 'TextEdit', 'Lgm_Ukur': 'TextEdit', 'Bjh_Bkti': 'TextEdit', 'Lgm_Bkti': 'TextEdit', 'Remark': 'TextEdit', 'Referensi': 'TextEdit', 'Maps': 'TextEdit', });
lyr_BesiPrimer_21.set('fieldImages', {'Komoditas': 'TextEdit', 'Unsur': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kecamatan': 'TextEdit', 'Lokasi': 'TextEdit', 'Status': 'TextEdit', 'Bjh_Hipo': 'TextEdit', 'Lgm_Hipo': 'TextEdit', 'Bjh_Reka': 'TextEdit', 'Lgm_Reka': 'TextEdit', 'Bjh_Kira': 'TextEdit', 'Lgm_Kira': 'TextEdit', 'Bjh_Unjk': 'TextEdit', 'Lgm_Unjk': 'TextEdit', 'Bjh_Ukur': 'TextEdit', 'Lgm_Ukur': 'TextEdit', 'Bjh_Bkti': 'TextEdit', 'Lgm_Bkti': 'TextEdit', 'Remark': 'TextEdit', 'Referensi': 'TextEdit', 'Maps': 'TextEdit', });
lyr_BesiLaterit_22.set('fieldImages', {'Komoditas': 'TextEdit', 'Unsur': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kecamatan': 'TextEdit', 'Lokasi': 'TextEdit', 'Status': 'TextEdit', 'Bjh_Hipo': 'TextEdit', 'Lgm_Hipo': 'TextEdit', 'Bjh_Reka': 'TextEdit', 'Lgm_Reka': 'TextEdit', 'Bjh_Kira': 'TextEdit', 'Lgm_Kira': 'TextEdit', 'Bjh_Unjk': 'TextEdit', 'Lgm_Unjk': 'TextEdit', 'Bjh_Ukur': 'TextEdit', 'Lgm_Ukur': 'TextEdit', 'Bjh_Bkti': 'TextEdit', 'Lgm_Bkti': 'TextEdit', 'Remark': 'TextEdit', 'Referensi': 'TextEdit', 'Maps': 'TextEdit', });
lyr_AirRaksa_23.set('fieldImages', {'Komoditas': 'TextEdit', 'Unsur': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabupaten': 'TextEdit', 'Kecamatan': 'TextEdit', 'Lokasi': 'TextEdit', 'Status': 'TextEdit', 'Bjh_Hipo': 'TextEdit', 'Lgm_Hipo': 'TextEdit', 'Bjh_Reka': 'TextEdit', 'Lgm_Reka': 'TextEdit', 'Bjh_Kira': 'TextEdit', 'Lgm_Kira': 'TextEdit', 'Bjh_Unjk': 'TextEdit', 'Lgm_Unjk': 'TextEdit', 'Bjh_Ukur': 'TextEdit', 'Lgm_Ukur': 'TextEdit', 'Bjh_Bkti': 'TextEdit', 'Lgm_Bkti': 'TextEdit', 'Remark': 'TextEdit', 'Referensi': 'TextEdit', 'Maps': 'TextEdit', });
lyr_Xenotim_2.set('fieldLabels', {'Komoditas': 'inline label - always visible', 'Unsur': 'inline label - always visible', 'Provinsi': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Lokasi': 'inline label - always visible', 'Status': 'inline label - always visible', 'Bjh_Hipo': 'inline label - always visible', 'Lgm_Hipo': 'inline label - always visible', 'Bjh_Reka': 'inline label - always visible', 'Lgm_Reka': 'inline label - always visible', 'Bjh_Kira': 'inline label - always visible', 'Lgm_Kira': 'inline label - always visible', 'Bjh_Unjk': 'inline label - always visible', 'Lgm_Unjk': 'inline label - always visible', 'Bjh_Ukur': 'inline label - always visible', 'Lgm_Ukur': 'inline label - always visible', 'Bjh_Bkti': 'inline label - always visible', 'Lgm_Bkti': 'inline label - always visible', 'Remark': 'inline label - always visible', 'Referensi': 'inline label - always visible', 'Maps': 'inline label - always visible', });
lyr_TitanPlaser_3.set('fieldLabels', {'Komoditas': 'inline label - always visible', 'Unsur': 'inline label - always visible', 'Provinsi': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Lokasi': 'inline label - always visible', 'Status': 'inline label - always visible', 'Bjh_Hipo': 'inline label - always visible', 'Lgm_Hipo': 'inline label - always visible', 'Bjh_Reka': 'inline label - always visible', 'Lgm_Reka': 'inline label - always visible', 'Bjh_Kira': 'inline label - always visible', 'Lgm_Kira': 'inline label - always visible', 'Bjh_Unjk': 'inline label - always visible', 'Lgm_Unjk': 'inline label - always visible', 'Bjh_Ukur': 'inline label - always visible', 'Lgm_Ukur': 'inline label - always visible', 'Bjh_Bkti': 'inline label - always visible', 'Lgm_Bkti': 'inline label - always visible', 'Remark': 'inline label - always visible', 'Referensi': 'inline label - always visible', 'Maps': 'inline label - always visible', });
lyr_TitanLaterit_4.set('fieldLabels', {'Komoditas': 'inline label - always visible', 'Unsur': 'inline label - always visible', 'Provinsi': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Lokasi': 'inline label - always visible', 'Status': 'inline label - always visible', 'Bjh_Hipo': 'inline label - always visible', 'Lgm_Hipo': 'inline label - always visible', 'Bjh_Reka': 'inline label - always visible', 'Lgm_Reka': 'inline label - always visible', 'Bjh_Kira': 'inline label - always visible', 'Lgm_Kira': 'inline label - always visible', 'Bjh_Unjk': 'inline label - always visible', 'Lgm_Unjk': 'inline label - always visible', 'Bjh_Ukur': 'inline label - always visible', 'Lgm_Ukur': 'inline label - always visible', 'Bjh_Bkti': 'inline label - always visible', 'Lgm_Bkti': 'inline label - always visible', 'Remark': 'inline label - always visible', 'Referensi': 'inline label - always visible', 'Maps': 'inline label - always visible', });
lyr_Timbal_5.set('fieldLabels', {'Komoditas': 'inline label - always visible', 'Unsur': 'inline label - always visible', 'Provinsi': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Lokasi': 'inline label - always visible', 'Status': 'inline label - always visible', 'Bjh_Hipo': 'inline label - always visible', 'Lgm_Hipo': 'inline label - always visible', 'Bjh_Reka': 'inline label - always visible', 'Lgm_Reka': 'inline label - always visible', 'Bjh_Kira': 'inline label - always visible', 'Lgm_Kira': 'inline label - always visible', 'Bjh_Unjk': 'inline label - always visible', 'Lgm_Unjk': 'inline label - always visible', 'Bjh_Ukur': 'inline label - always visible', 'Lgm_Ukur': 'inline label - always visible', 'Bjh_Bkti': 'inline label - always visible', 'Lgm_Bkti': 'inline label - always visible', 'Remark': 'inline label - always visible', 'Referensi': 'inline label - always visible', 'Maps': 'inline label - always visible', });
lyr_Timah_6.set('fieldLabels', {'Komoditas': 'inline label - always visible', 'Unsur': 'inline label - always visible', 'Provinsi': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Lokasi': 'inline label - always visible', 'Status': 'inline label - always visible', 'Bjh_Hipo': 'inline label - always visible', 'Lgm_Hipo': 'inline label - always visible', 'Bjh_Reka': 'inline label - always visible', 'Lgm_Reka': 'inline label - always visible', 'Bjh_Kira': 'inline label - always visible', 'Lgm_Kira': 'inline label - always visible', 'Bjh_Unjk': 'inline label - always visible', 'Lgm_Unjk': 'inline label - always visible', 'Bjh_Ukur': 'inline label - always visible', 'Lgm_Ukur': 'inline label - always visible', 'Bjh_Bkti': 'inline label - always visible', 'Lgm_Bkti': 'inline label - always visible', 'Remark': 'inline label - always visible', 'Referensi': 'inline label - always visible', 'Maps': 'inline label - always visible', });
lyr_Tembaga_7.set('fieldLabels', {'Komoditas': 'inline label - always visible', 'Unsur': 'inline label - always visible', 'Provinsi': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Lokasi': 'inline label - always visible', 'Status': 'inline label - always visible', 'Bjh_Hipo': 'inline label - always visible', 'Lgm_Hipo': 'inline label - always visible', 'Bjh_Reka': 'inline label - always visible', 'Lgm_Reka': 'inline label - always visible', 'Bjh_Kira': 'inline label - always visible', 'Lgm_Kira': 'inline label - always visible', 'Bjh_Unjk': 'inline label - always visible', 'Lgm_Unjk': 'inline label - always visible', 'Bjh_Ukur': 'inline label - always visible', 'Lgm_Ukur': 'inline label - always visible', 'Bjh_Bkti': 'inline label - always visible', 'Lgm_Bkti': 'inline label - always visible', 'Remark': 'inline label - always visible', 'Referensi': 'inline label - always visible', 'Maps': 'inline label - always visible', });
lyr_Seng_8.set('fieldLabels', {'Komoditas': 'inline label - always visible', 'Unsur': 'inline label - always visible', 'Provinsi': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Lokasi': 'inline label - always visible', 'Status': 'inline label - always visible', 'Bjh_Hipo': 'inline label - always visible', 'Lgm_Hipo': 'inline label - always visible', 'Bjh_Reka': 'inline label - always visible', 'Lgm_Reka': 'inline label - always visible', 'Bjh_Kira': 'inline label - always visible', 'Lgm_Kira': 'inline label - always visible', 'Bjh_Unjk': 'inline label - always visible', 'Lgm_Unjk': 'inline label - always visible', 'Bjh_Ukur': 'inline label - always visible', 'Lgm_Ukur': 'inline label - always visible', 'Bjh_Bkti': 'inline label - always visible', 'Lgm_Bkti': 'inline label - always visible', 'Remark': 'inline label - always visible', 'Referensi': 'inline label - always visible', 'Maps': 'inline label - always visible', });
lyr_Platina_9.set('fieldLabels', {'Komoditas': 'inline label - always visible', 'Unsur': 'inline label - always visible', 'Provinsi': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Lokasi': 'inline label - always visible', 'Status': 'inline label - always visible', 'Bjh_Hipo': 'inline label - always visible', 'Lgm_Hipo': 'inline label - always visible', 'Bjh_Reka': 'inline label - always visible', 'Lgm_Reka': 'inline label - always visible', 'Bjh_Kira': 'inline label - always visible', 'Lgm_Kira': 'inline label - always visible', 'Bjh_Unjk': 'inline label - always visible', 'Lgm_Unjk': 'inline label - always visible', 'Bjh_Ukur': 'inline label - always visible', 'Lgm_Ukur': 'inline label - always visible', 'Bjh_Bkti': 'inline label - always visible', 'Lgm_Bkti': 'inline label - always visible', 'Remark': 'inline label - always visible', 'Referensi': 'inline label - always visible', 'Maps': 'inline label - always visible', });
lyr_Perak_10.set('fieldLabels', {'Komoditas': 'inline label - always visible', 'Unsur': 'inline label - always visible', 'Provinsi': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Lokasi': 'inline label - always visible', 'Status': 'inline label - always visible', 'Bjh_Hipo': 'inline label - always visible', 'Lgm_Hipo': 'inline label - always visible', 'Bjh_Reka': 'inline label - always visible', 'Lgm_Reka': 'inline label - always visible', 'Bjh_Kira': 'inline label - always visible', 'Lgm_Kira': 'inline label - always visible', 'Bjh_Unjk': 'inline label - always visible', 'Lgm_Unjk': 'inline label - always visible', 'Bjh_Ukur': 'inline label - always visible', 'Lgm_Ukur': 'inline label - always visible', 'Bjh_Bkti': 'inline label - always visible', 'Lgm_Bkti': 'inline label - always visible', 'Remark': 'inline label - always visible', 'Referensi': 'inline label - always visible', 'Maps': 'inline label - always visible', });
lyr_PasirBesi_11.set('fieldLabels', {'Komoditas': 'inline label - always visible', 'Unsur': 'inline label - always visible', 'Provinsi': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Lokasi': 'inline label - always visible', 'Status': 'inline label - always visible', 'Bjh_Hipo': 'inline label - always visible', 'Lgm_Hipo': 'inline label - always visible', 'Bjh_Reka': 'inline label - always visible', 'Lgm_Reka': 'inline label - always visible', 'Bjh_Kira': 'inline label - always visible', 'Lgm_Kira': 'inline label - always visible', 'Bjh_Unjk': 'inline label - always visible', 'Lgm_Unjk': 'inline label - always visible', 'Bjh_Ukur': 'inline label - always visible', 'Lgm_Ukur': 'inline label - always visible', 'Bjh_Bkti': 'inline label - always visible', 'Lgm_Bkti': 'inline label - always visible', 'Remark': 'inline label - always visible', 'Referensi': 'inline label - always visible', 'Maps': 'inline label - always visible', });
lyr_Nikel_12.set('fieldLabels', {'Komoditas': 'inline label - always visible', 'Unsur': 'inline label - always visible', 'Provinsi': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Lokasi': 'inline label - always visible', 'Status': 'inline label - always visible', 'Bjh_Hipo': 'inline label - always visible', 'Lgm_Hipo': 'inline label - always visible', 'Bjh_Reka': 'inline label - always visible', 'Lgm_Reka': 'inline label - always visible', 'Bjh_Kira': 'inline label - always visible', 'Lgm_Kira': 'inline label - always visible', 'Bjh_Unjk': 'inline label - always visible', 'Lgm_Unjk': 'inline label - always visible', 'Bjh_Ukur': 'inline label - always visible', 'Lgm_Ukur': 'inline label - always visible', 'Bjh_Bkti': 'inline label - always visible', 'Lgm_Bkti': 'inline label - always visible', 'Remark': 'inline label - always visible', 'Referensi': 'inline label - always visible', 'Maps': 'inline label - always visible', });
lyr_Monasit_13.set('fieldLabels', {'Komoditas': 'inline label - always visible', 'Unsur': 'inline label - always visible', 'Provinsi': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Lokasi': 'inline label - always visible', 'Status': 'inline label - always visible', 'Bjh_Hipo': 'inline label - always visible', 'Lgm_Hipo': 'inline label - always visible', 'Bjh_Reka': 'inline label - always visible', 'Lgm_Reka': 'inline label - always visible', 'Bjh_Kira': 'inline label - always visible', 'Lgm_Kira': 'inline label - always visible', 'Bjh_Unjk': 'inline label - always visible', 'Lgm_Unjk': 'inline label - always visible', 'Bjh_Ukur': 'inline label - always visible', 'Lgm_Ukur': 'inline label - always visible', 'Bjh_Bkti': 'inline label - always visible', 'Lgm_Bkti': 'inline label - always visible', 'Remark': 'inline label - always visible', 'Referensi': 'inline label - always visible', 'Maps': 'inline label - always visible', });
lyr_Molibdenum_14.set('fieldLabels', {'Komoditas': 'inline label - always visible', 'Unsur': 'inline label - always visible', 'Provinsi': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Lokasi': 'inline label - always visible', 'Status': 'inline label - always visible', 'Bjh_Hipo': 'inline label - always visible', 'Lgm_Hipo': 'inline label - always visible', 'Bjh_Reka': 'inline label - always visible', 'Lgm_Reka': 'inline label - always visible', 'Bjh_Kira': 'inline label - always visible', 'Lgm_Kira': 'inline label - always visible', 'Bjh_Unjk': 'inline label - always visible', 'Lgm_Unjk': 'inline label - always visible', 'Bjh_Ukur': 'inline label - always visible', 'Lgm_Ukur': 'inline label - always visible', 'Bjh_Bkti': 'inline label - always visible', 'Lgm_Bkti': 'inline label - always visible', 'Remark': 'inline label - always visible', 'Referensi': 'inline label - always visible', 'Maps': 'inline label - always visible', });
lyr_Mangan_15.set('fieldLabels', {'Komoditas': 'inline label - always visible', 'Unsur': 'inline label - always visible', 'Provinsi': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Lokasi': 'inline label - always visible', 'Status': 'inline label - always visible', 'Bjh_Hipo': 'inline label - always visible', 'Lgm_Hipo': 'inline label - always visible', 'Bjh_Reka': 'inline label - always visible', 'Lgm_Reka': 'inline label - always visible', 'Bjh_Kira': 'inline label - always visible', 'Lgm_Kira': 'inline label - always visible', 'Bjh_Unjk': 'inline label - always visible', 'Lgm_Unjk': 'inline label - always visible', 'Bjh_Ukur': 'inline label - always visible', 'Lgm_Ukur': 'inline label - always visible', 'Bjh_Bkti': 'inline label - always visible', 'Lgm_Bkti': 'inline label - always visible', 'Remark': 'inline label - always visible', 'Referensi': 'inline label - always visible', 'Maps': 'inline label - always visible', });
lyr_KromitPlaser_16.set('fieldLabels', {'Komoditas': 'inline label - always visible', 'Unsur': 'inline label - always visible', 'Provinsi': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Lokasi': 'inline label - always visible', 'Status': 'inline label - always visible', 'Bjh_Hipo': 'inline label - always visible', 'Lgm_Hipo': 'inline label - always visible', 'Bjh_Reka': 'inline label - always visible', 'Lgm_Reka': 'inline label - always visible', 'Bjh_Kira': 'inline label - always visible', 'Lgm_Kira': 'inline label - always visible', 'Bjh_Unjk': 'inline label - always visible', 'Lgm_Unjk': 'inline label - always visible', 'Bjh_Ukur': 'inline label - always visible', 'Lgm_Ukur': 'inline label - always visible', 'Bjh_Bkti': 'inline label - always visible', 'Lgm_Bkti': 'inline label - always visible', 'Remark': 'inline label - always visible', 'Referensi': 'inline label - always visible', 'Maps': 'inline label - always visible', });
lyr_Kromit_17.set('fieldLabels', {'Komoditas': 'inline label - always visible', 'Unsur': 'inline label - always visible', 'Provinsi': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Lokasi': 'inline label - always visible', 'Status': 'inline label - always visible', 'Bjh_Hipo': 'inline label - always visible', 'Lgm_Hipo': 'inline label - always visible', 'Bjh_Reka': 'inline label - always visible', 'Lgm_Reka': 'inline label - always visible', 'Bjh_Kira': 'inline label - always visible', 'Lgm_Kira': 'inline label - always visible', 'Bjh_Unjk': 'inline label - always visible', 'Lgm_Unjk': 'inline label - always visible', 'Bjh_Ukur': 'inline label - always visible', 'Lgm_Ukur': 'inline label - always visible', 'Bjh_Bkti': 'inline label - always visible', 'Lgm_Bkti': 'inline label - always visible', 'Remark': 'inline label - always visible', 'Referensi': 'inline label - always visible', 'Maps': 'inline label - always visible', });
lyr_Kobal_18.set('fieldLabels', {'Komoditas': 'inline label - always visible', 'Unsur': 'inline label - always visible', 'Provinsi': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Lokasi': 'inline label - always visible', 'Status': 'inline label - always visible', 'Bjh_Hipo': 'inline label - always visible', 'Lgm_Hipo': 'inline label - always visible', 'Bjh_Reka': 'inline label - always visible', 'Lgm_Reka': 'inline label - always visible', 'Bjh_Kira': 'inline label - always visible', 'Lgm_Kira': 'inline label - always visible', 'Bjh_Unjk': 'inline label - always visible', 'Lgm_Unjk': 'inline label - always visible', 'Bjh_Ukur': 'inline label - always visible', 'Lgm_Ukur': 'inline label - always visible', 'Bjh_Bkti': 'inline label - always visible', 'Lgm_Bkti': 'inline label - always visible', 'Remark': 'inline label - always visible', 'Referensi': 'inline label - always visible', 'Maps': 'inline label - always visible', });
lyr_EmasPrimer_19.set('fieldLabels', {'Komoditas': 'inline label - always visible', 'Unsur': 'inline label - always visible', 'Provinsi': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Lokasi': 'inline label - always visible', 'Status': 'inline label - always visible', 'Bjh_Hipo': 'inline label - always visible', 'Lgm_Hipo': 'inline label - always visible', 'Bjh_Reka': 'inline label - always visible', 'Lgm_Reka': 'inline label - always visible', 'Bjh_Kira': 'inline label - always visible', 'Lgm_Kira': 'inline label - always visible', 'Bjh_Unjk': 'inline label - always visible', 'Lgm_Unjk': 'inline label - always visible', 'Bjh_Ukur': 'inline label - always visible', 'Lgm_Ukur': 'inline label - always visible', 'Bjh_Bkti': 'inline label - always visible', 'Lgm_Bkti': 'inline label - always visible', 'Remark': 'inline label - always visible', 'Referensi': 'inline label - always visible', 'Maps': 'inline label - always visible', });
lyr_BesiSedimen_20.set('fieldLabels', {'Komoditas': 'inline label - always visible', 'Unsur': 'inline label - always visible', 'Provinsi': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Lokasi': 'inline label - always visible', 'Status': 'inline label - always visible', 'Bjh_Hipo': 'inline label - always visible', 'Lgm_Hipo': 'inline label - always visible', 'Bjh_Reka': 'inline label - always visible', 'Lgm_Reka': 'inline label - always visible', 'Bjh_Kira': 'inline label - always visible', 'Lgm_Kira': 'inline label - always visible', 'Bjh_Unjk': 'inline label - always visible', 'Lgm_Unjk': 'inline label - always visible', 'Bjh_Ukur': 'inline label - always visible', 'Lgm_Ukur': 'inline label - always visible', 'Bjh_Bkti': 'inline label - always visible', 'Lgm_Bkti': 'inline label - always visible', 'Remark': 'inline label - always visible', 'Referensi': 'inline label - always visible', 'Maps': 'inline label - always visible', });
lyr_BesiPrimer_21.set('fieldLabels', {'Komoditas': 'inline label - always visible', 'Unsur': 'inline label - always visible', 'Provinsi': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Lokasi': 'inline label - always visible', 'Status': 'inline label - always visible', 'Bjh_Hipo': 'inline label - always visible', 'Lgm_Hipo': 'inline label - always visible', 'Bjh_Reka': 'inline label - always visible', 'Lgm_Reka': 'inline label - always visible', 'Bjh_Kira': 'inline label - always visible', 'Lgm_Kira': 'inline label - always visible', 'Bjh_Unjk': 'inline label - always visible', 'Lgm_Unjk': 'inline label - always visible', 'Bjh_Ukur': 'inline label - always visible', 'Lgm_Ukur': 'inline label - always visible', 'Bjh_Bkti': 'inline label - always visible', 'Lgm_Bkti': 'inline label - always visible', 'Remark': 'inline label - always visible', 'Referensi': 'inline label - always visible', 'Maps': 'inline label - always visible', });
lyr_BesiLaterit_22.set('fieldLabels', {'Komoditas': 'inline label - always visible', 'Unsur': 'inline label - always visible', 'Provinsi': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Lokasi': 'inline label - always visible', 'Status': 'inline label - always visible', 'Bjh_Hipo': 'inline label - always visible', 'Lgm_Hipo': 'inline label - always visible', 'Bjh_Reka': 'inline label - always visible', 'Lgm_Reka': 'inline label - always visible', 'Bjh_Kira': 'inline label - always visible', 'Lgm_Kira': 'inline label - always visible', 'Bjh_Unjk': 'inline label - always visible', 'Lgm_Unjk': 'inline label - always visible', 'Bjh_Ukur': 'inline label - always visible', 'Lgm_Ukur': 'inline label - always visible', 'Bjh_Bkti': 'inline label - always visible', 'Lgm_Bkti': 'inline label - always visible', 'Remark': 'inline label - always visible', 'Referensi': 'inline label - always visible', 'Maps': 'inline label - always visible', });
lyr_AirRaksa_23.set('fieldLabels', {'Komoditas': 'inline label - always visible', 'Unsur': 'inline label - always visible', 'Provinsi': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', 'Kecamatan': 'inline label - always visible', 'Lokasi': 'inline label - always visible', 'Status': 'inline label - always visible', 'Bjh_Hipo': 'inline label - always visible', 'Lgm_Hipo': 'inline label - always visible', 'Bjh_Reka': 'inline label - always visible', 'Lgm_Reka': 'inline label - always visible', 'Bjh_Kira': 'inline label - always visible', 'Lgm_Kira': 'inline label - always visible', 'Bjh_Unjk': 'inline label - always visible', 'Lgm_Unjk': 'inline label - always visible', 'Bjh_Ukur': 'inline label - always visible', 'Lgm_Ukur': 'inline label - always visible', 'Bjh_Bkti': 'inline label - always visible', 'Lgm_Bkti': 'inline label - always visible', 'Remark': 'inline label - always visible', 'Referensi': 'inline label - always visible', 'Maps': 'inline label - always visible', });
lyr_AirRaksa_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});