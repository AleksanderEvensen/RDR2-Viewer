import { Bounds, CRS, icon, LatLng, LatLngBounds, Point, Transformation, Util, type Projection } from "leaflet";

function game2Map(x: number, y: number): [number, number] {
    return [y, -x];
}

const topLeft = game2Map(-7100, 4020);
const bottomRight = game2Map(5100, -6100);

const RedDeadProjection: Projection = {
    project(latlng) {
        return new Point(latlng.lng, latlng.lat);
    },

    unproject(point: Point) {
        return new LatLng(point.y, point.x);
    },

    bounds: new Bounds(topLeft, bottomRight),
};

const IconScale = 0.3;

const gang_leader_icon = icon({
    iconUrl: "http://femga.com/images/samples/ui_textures_no_bg/blips/blip_ambient_gang_leader.png",

    iconSize: [32 * IconScale, 32 * IconScale],
    iconAnchor: [16 * IconScale, 16 * IconScale],
});

const chore_icon = icon({
    iconUrl: "http://femga.com/images/samples/ui_textures_no_bg/blips/blip_ambient_chore.png",

    iconSize: [32 * IconScale, 32 * IconScale],
    iconAnchor: [16 * IconScale, 16 * IconScale],
});
const points: [number, number][] = [];

for (let y = -10; y <= 10; y++) {
    for (let x = -10; x <= 10; x++) {
        points.push([x, y]);
    }
}

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const CoordinateSystem: CRS = Util.extend({}, CRS.Simple, {
    projection: RedDeadProjection,
    transformation: new Transformation(-0.015525, 111.28, -0.01552, 63.61),
    infinite: true,
} as Partial<CRS>);

const position: [number, number] = game2Map(0, 0);

export default function Map() {
    return (
        <MapContainer
            className="h-[400px]"
            crs={CoordinateSystem}
            maxZoom={8}
            minZoom={3}
            zoom={5}
            center={position}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://s.rsg.sc/sc/images/games/RDR2/map/game/{z}/{x}/{y}.jpg"
            />
            {/* <Marker position={topLeft} icon={gang_leader_icon} /> */}
            {/* <Marker position={bottomRight} icon={gang_leader_icon} /> */}
            {/* <Marker position={[0.0, 0.0]}></Marker> */}
        </MapContainer>
    );
}
