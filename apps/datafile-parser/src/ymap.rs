use serde_derive::Deserialize;

#[derive(Deserialize, Debug)]
pub struct CMapData {
    name: String,
    #[serde(rename = "entitiesExtentsMin")]
    entities_extents_min: AttrVec3,
    #[serde(rename = "entitiesExtentsMax")]
    entities_extents_max: AttrVec3,

    entities: Vec<EntityItem>,
}

#[derive(Deserialize, Debug)]
struct AttrVec3 {
    #[serde(rename = "@x")]
    x: f32,
    #[serde(rename = "@y")]
    y: f32,
    #[serde(rename = "@z")]
    z: f32,
}
#[derive(Deserialize, Debug)]
struct AttrRot4 {
    #[serde(rename = "@x")]
    x: f32,
    #[serde(rename = "@y")]
    y: f32,
    #[serde(rename = "@z")]
    z: f32,
    #[serde(rename = "@w")]
    w: f32,
}

#[derive(Deserialize, Debug)]
struct CEntityDef {
    #[serde(rename = "archetypeName")]
    hash: String,
    flags: Value<u32>,
    id: Value<i64>
    position: AttrVec3,
    rotation: AttrRot4,
    scaleXY: Value<f32>,
    scaleZ: Value<f32>

}

#[derive(Deserialize, Debug)]
struct Value<T> {
    #[serde(rename = "@value")]
    value: T,
}

#[derive(Deserialize, Debug)]
struct Text<T> {
    #[serde(rename = "$text")]
    value: T,
}
