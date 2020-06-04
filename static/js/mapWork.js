function clearLayers(map, markerGroup, markerGroup1, markerGroup2, circleGroup,
                     markerGroup4, markerGroupBuilder, markerGroupCarpenter, markerGroupEngineer,
                     markerGroupHeating, markerGroupPlasterer, markerGroupStone, markerGroupTiler) {
    var occupationEvent = document.getElementById("options");
    occupation = occupationEvent.options[occupationEvent.selectedIndex].value;
    circleGroup.eachLayer(function (layer) {
        map.removeLayer(layer);
    });
    if (occupation === 'Painter') {
        map.addLayer(markerGroup1);
        map.removeLayer(markerGroup2);
        map.removeLayer(markerGroup);
        map.removeLayer(markerGroup4);
        map.removeLayer(markerGroupBuilder);
        map.removeLayer(markerGroupCarpenter);
        map.removeLayer(markerGroupEngineer);
        map.removeLayer(markerGroupHeating);
        map.removeLayer(markerGroupPlasterer);
        map.removeLayer(markerGroupStone);
        map.removeLayer(markerGroupTiler);
    }
    else if (occupation === 'Plumber') {
        map.addLayer(markerGroup);
        map.removeLayer(markerGroup1);
        map.removeLayer(markerGroup2);
        map.removeLayer(markerGroup4);
        map.removeLayer(markerGroupBuilder);
        map.removeLayer(markerGroupCarpenter);
        map.removeLayer(markerGroupEngineer);
        map.removeLayer(markerGroupHeating);
        map.removeLayer(markerGroupPlasterer);
        map.removeLayer(markerGroupStone);
        map.removeLayer(markerGroupTiler);
    }
    else if (occupation === 'Electrician') {
        map.addLayer(markerGroup2);
        map.removeLayer(markerGroup1);
        map.removeLayer(markerGroup);
        map.removeLayer(markerGroup4);
        map.removeLayer(markerGroupBuilder);
        map.removeLayer(markerGroupCarpenter);
        map.removeLayer(markerGroupEngineer);
        map.removeLayer(markerGroupHeating);
        map.removeLayer(markerGroupPlasterer);
        map.removeLayer(markerGroupStone);
        map.removeLayer(markerGroupTiler);
    }
    else if (occupation === 'Kitchen Fitter'){
        map.addLayer(markerGroup4);
        map.removeLayer(markerGroup1);
        map.removeLayer(markerGroup);
        map.removeLayer(markerGroup2);
        map.removeLayer(markerGroupBuilder);
        map.removeLayer(markerGroupCarpenter);
        map.removeLayer(markerGroupEngineer);
        map.removeLayer(markerGroupHeating);
        map.removeLayer(markerGroupPlasterer);
        map.removeLayer(markerGroupStone);
        map.removeLayer(markerGroupTiler);
    }
    else if (occupation === 'Builder'){
        map.addLayer(markerGroupBuilder);
        map.removeLayer(markerGroup1);
        map.removeLayer(markerGroup);
        map.removeLayer(markerGroup2);
        map.removeLayer(markerGroupCarpenter);
        map.removeLayer(markerGroup4);
        map.removeLayer(markerGroupEngineer);
        map.removeLayer(markerGroupHeating);
        map.removeLayer(markerGroupPlasterer);
        map.removeLayer(markerGroupStone);
        map.removeLayer(markerGroupTiler);
    }
    else if (occupation === 'Carpenter'){
        map.addLayer(markerGroupCarpenter);
        map.removeLayer(markerGroup1);
        map.removeLayer(markerGroup);
        map.removeLayer(markerGroup2);
        map.removeLayer(markerGroupBuilder);
        map.removeLayer(markerGroup4);
        map.removeLayer(markerGroupEngineer);
        map.removeLayer(markerGroupHeating);
        map.removeLayer(markerGroupPlasterer);
        map.removeLayer(markerGroupStone);
        map.removeLayer(markerGroupTiler);
    }
    else if (occupation === 'Engineer'){
        map.addLayer(markerGroupEngineer);
        map.removeLayer(markerGroup1);
        map.removeLayer(markerGroup);
        map.removeLayer(markerGroup2);
        map.removeLayer(markerGroupBuilder);
        map.removeLayer(markerGroup4);
        map.removeLayer(markerGroupCarpenter);
        map.removeLayer(markerGroupHeating);
        map.removeLayer(markerGroupPlasterer);
        map.removeLayer(markerGroupStone);
        map.removeLayer(markerGroupTiler);
    }
    else if (occupation === 'Heating Contractor'){
        map.addLayer(markerGroupHeating);
        map.removeLayer(markerGroup1);
        map.removeLayer(markerGroup);
        map.removeLayer(markerGroup2);
        map.removeLayer(markerGroupBuilder);
        map.removeLayer(markerGroup4);
        map.removeLayer(markerGroupCarpenter);
        map.removeLayer(markerGroupEngineer);
        map.removeLayer(markerGroupPlasterer);
        map.removeLayer(markerGroupStone);
        map.removeLayer(markerGroupTiler);
    }
    else if (occupation === 'Plasterer'){
        map.addLayer(markerGroupPlasterer);
        map.removeLayer(markerGroup1);
        map.removeLayer(markerGroup);
        map.removeLayer(markerGroup2);
        map.removeLayer(markerGroupBuilder);
        map.removeLayer(markerGroup4);
        map.removeLayer(markerGroupCarpenter);
        map.removeLayer(markerGroupEngineer);
        map.removeLayer(markerGroupHeating);
        map.removeLayer(markerGroupStone);
        map.removeLayer(markerGroupTiler);
    }
    else if (occupation === 'Stone Worker'){
        map.addLayer(markerGroupStone);
        map.removeLayer(markerGroup1);
        map.removeLayer(markerGroup);
        map.removeLayer(markerGroup2);
        map.removeLayer(markerGroupBuilder);
        map.removeLayer(markerGroup4);
        map.removeLayer(markerGroupCarpenter);
        map.removeLayer(markerGroupEngineer);
        map.removeLayer(markerGroupHeating);
        map.removeLayer(markerGroupPlasterer);
        map.removeLayer(markerGroupTiler);
    }
    else if (occupation === 'Tiler'){
        map.addLayer(markerGroupTiler);
        map.removeLayer(markerGroup1);
        map.removeLayer(markerGroup);
        map.removeLayer(markerGroup2);
        map.removeLayer(markerGroupBuilder);
        map.removeLayer(markerGroup4);
        map.removeLayer(markerGroupCarpenter);
        map.removeLayer(markerGroupEngineer);
        map.removeLayer(markerGroupHeating);
        map.removeLayer(markerGroupPlasterer);
        map.removeLayer(markerGroupStone);
    }
    else {
        console.log('error');
    }
}

function clearRadius(map, circle, circleGroup) {
    circleGroup.eachLayer(function (layer) {
        map.removeLayer(layer);
    });
    circle.addTo(circleGroup);
}

function clearMarker(map, marker3, newMarkerGroup) {
    newMarkerGroup.eachLayer(function (layer) {
        map.removeLayer(layer);
    });
    marker3.addTo(newMarkerGroup);
}

// Havsersine formula returning distance in km
function getDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = (lat2-lat1) * (Math.PI/180);
    var dLon = (lon2-lon1) * (Math.PI/180);
    var a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos((lat1) * (Math.PI/180)) * Math.cos((lat2) * (Math.PI/180)) *
        Math.sin(dLon/2) * Math.sin(dLon/2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var distance = R * c;
    return distance;
}

