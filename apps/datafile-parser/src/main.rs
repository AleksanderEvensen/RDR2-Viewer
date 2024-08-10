mod ymap;

use ymap::CMapData;

const INSTANCE_XML: &'static str = include_str!("../../../instance_entities.xml");
const ENTITY_XML: &'static str = include_str!("../../../entity_archetype.xml");

fn main() {
    let data: CMapData = quick_xml::de::from_str(&INSTANCE_XML).unwrap();

    println!("{:#?}", data);

    println!("Hello, world!");
}
