import React from 'react';
import OpenedSvg from '../images/opened';
import ClosedSvg from '../images/closed';
import config from '../../../config';
import Link from '../link';

const TreeNode = ({ className = '', setCollapsed, collapsed, url, title, items, ...rest }) => {
  const isCollapsed = collapsed[url];

  const collapse = () => {
    setCollapsed(url);
  };

  const hasChildren = items.length !== 0;

  let location;

  if (typeof document != 'undefined') {
    location = document.location;
  }
  const active =
    location && (location.pathname === url || location.pathname === config.gatsby.pathPrefix + url);

  const calculatedClassName = `${className} item ${active ? 'active' : ''}`;

  // crappy hardcoded fix to change sidebar item order and titles
  if (hasChildren) {
    switch (items[0].label) {
      case 'beginner-guide': // guides
        items[0] = { items:[], label: 'faq', title: 'FAQ', url: '/guides/faq'};
        items[1] = { items:[], label: 'beginner-guide', title: 'Beginner Guide', url: '/guides/beginner-guide'};
        items[2] = { items:[], label: 'postgame-guide', title: 'Postgame Guide', url: '/guides/postgame-guide'};
        items[3] = { items:[], label: 'tips-and-tricks', title: 'Tips and Tricks', url: '/guides/tips-and-tricks'};
        items[4] = { items:[], label: 'identifying-items', title: 'Identifying Items', url: '/guides/identifying-items'};
        items[5] = { items:[], label: 'stealing', title: 'Stealing', url: '/guides/stealing'};
        items[6] = { items:[], label: 'book-completion', title: 'Book Completion', url: '/guides/book-completion'};
        items[7] = { items:[], label: 'rescue-passwords', title: 'Rescue Passwords', url: '/guides/rescue-passwords'};
        items[8] = { items:[], label: 'speedrunning', title: 'Speedrunning', url: '/guides/speedrunning'};
        break;
      case 'bracelets': // items
        items[0] = { items:[], label: 'price-chart', title: 'Price Chart', url: '/items/price-chart'};
        items[1] = { items:[], label: 'weapons', title: 'Weapons', url: '/items/weapons'};
        items[2] = { items:[], label: 'shields', title: 'Shields', url: '/items/shields'};
        items[3] = { items:[], label: 'bracelets', title: 'Bracelets', url: '/items/bracelets'};
        items[4] = { items:[], label: 'grass', title: 'Grass', url: '/items/grass'};
        items[5] = { items:[], label: 'staves', title: 'Staves', url: '/items/staves'};
        items[6] = { items:[], label: 'scrolls', title: 'Scrolls', url: '/items/scrolls'};
        items[7] = { items:[], label: 'pots', title: 'Pots', url: '/items/pots'};
        items[8] = { items:[], label: 'food', title: 'Food', url: '/items/food'};
        items[9] = { items:[], label: 'talismans', title: 'Talismans', url: '/items/talismans'};
        items[10] = { items:[], label: 'projectiles', title: 'Projectiles', url: '/items/projectiles'};
        items[11] = { items:[], label: 'other-items', title: 'Other', url: '/items/other-items'};
        break;
      case 'adventure-footprints': // system
        items[0] = { items:[], label: 'gameplay-basics', title: 'Gameplay Basics', url: '/system/gameplay-basics'};
        items[1] = { items:[], label: 'dungeon-features', title: 'Dungeon Features', url: '/system/dungeon-features'};
        items[2] = { items:[], label: 'resonance', title: 'Resonance', url: '/system/resonance'};
        items[3] = { items:[], label: 'synthesis-runes', title: 'Runes', url: '/system/synthesis-runes'};
        items[4] = { items:[], label: 'necklace-abilities', title: 'Abilities', url: '/system/necklace-abilities'};
        items[5] = { items:[], label: 'monsters', title: 'Monsters', url: '/system/monsters'};
        items[6] = { items:[], label: 'traps', title: 'Traps', url: '/system/traps'};
        items[7] = { items:[], label: 'new-items', title: 'New Items', url: '/system/new-items'};
        items[8] = { items:[], label: 'allies', title: 'Allies', url: '/system/allies'};
        items[9] = { items:[], label: 'npcs', title: 'NPCs', url: '/system/npcs'};
        items[10] = { items:[], label: 'villages', title: 'Villages', url: '/system/villages'};
        items[11] = { items:[], label: 'status-conditions', title: 'Status Conditions', url: '/system/status-conditions'};
        items[12] = { items:[], label: 'tanuki-passwords', title: 'Tanuki Passwords', url: '/system/tanuki-passwords'};
        items[13] = { items:[], label: 'pontas-lottery', title: 'Ponta\'s Lottery', url: '/system/pontas-lottery'};
        items[14] = { items:[], label: 'map-patterns', title: 'Map Patterns', url: '/system/map-patterns'};
        items[15] = { items:[], label: 'adventure-footprints', title: 'Footprints', url: '/system/adventure-footprints'};
        items[16] = { items:[], label: 'expert-badges', title: 'Expert Badges', url: '/system/expert-badges'};
        items[17] = { items:[], label: 'music-collection', title: 'Music Collection', url: '/system/music-collection'};
        items[18] = { items:[], label: 'trophies', title: 'Trophies', url: '/system/trophies'};
        items[19] = { items:[], label: 'wanderer-rescue', title: 'Wanderer Rescue', url: '/system/wanderer-rescue'};
        break;
      case 'aura-ruins': //dungeons
        items[0] = { items:[], label: 'training-facility', title: 'Training Facility', url: '/dungeons/training-facility'};
        items[1] = { items:[], label: 'night-training-facility', title: 'Night Training', url: '/dungeons/night-training-facility'};
        items[2] = { items:[], label: 'explosion-rocks', title: 'Explosion Rocks', url: '/dungeons/explosion-rocks'};
        items[3] = { items:[], label: 'statue-cave', title: 'Statue Cave', url: '/dungeons/statue-cave'};
        items[4] = { items:[], label: 'underground-manor', title: 'Underground Manor', url: '/dungeons/underground-manor'};
        items[5] = { items:[], label: 'ouma-shrine', title: 'Ouma Shrine', url: '/dungeons/ouma-shrine'};
        items[6] = { items:[], label: 'destiny-trail', title: 'Destiny Trail', url: '/dungeons/destiny-trail'};
        items[7] = { items:[], label: 'tower-of-the-past', title: 'Tower of Past', url: '/dungeons/tower-of-the-past'};
        items[8] = { items:[], label: 'tower-of-the-present', title: 'Tower of Present', url: '/dungeons/tower-of-the-present'};
        items[9] = { items:[], label: 'tower-of-the-future', title: 'Tower of Future', url: '/dungeons/tower-of-the-future'};
        items[10] = { items:[], label: 'tower-of-fortune', title: 'Tower of Fortune', url: '/dungeons/tower-of-fortune'};
        items[11] = { items:[], label: 'tower-of-miracles', title: 'Tower of Miracles', url: '/dungeons/tower-of-miracles'};
        items[12] = { items:[], label: 'inori-cave', title: 'Inori Cave', url: '/dungeons/inori-cave'};
        items[13] = { items:[], label: 'lost-well', title: 'Lost Well', url: '/dungeons/lost-well'};
        items[14] = { items:[], label: 'gens-turf', title: 'Gen\'s Turf', url: '/dungeons/gens-turf'};
        items[15] = { items:[], label: 'pitfall-of-life', title: 'Pitfall of Life', url: '/dungeons/pitfall-of-life'};
        items[16] = { items:[], label: 'heavenly-lake', title: 'Heavenly Lake', url: '/dungeons/heavenly-lake'};
        items[17] = { items:[], label: 'old-road', title: 'Old Road', url: '/dungeons/old-road'};
        items[18] = { items:[], label: 'bizarre-tower', title: 'Bizarre Tower', url: '/dungeons/bizarre-tower'};
        items[19] = { items:[], label: 'onigiri-hollow', title: 'Onigiri Hollow', url: '/dungeons/onigiri-hollow'};
        items[20] = { items:[], label: 'primordial-chasm', title: 'Primordial Chasm', url: '/dungeons/primordial-chasm'};
        items[21] = { items:[], label: 'destinys-descent', title: 'Destiny\'s Descent', url: '/dungeons/destinys-descent'};
        items[22] = { items:[], label: 'merchants-hideout', title: 'Merchant\'s Hideout', url: '/dungeons/merchants-hideout'};
        items[23] = { items:[], label: 'warning-valley', title: 'Warning Valley', url: '/dungeons/warning-valley'};
        items[24] = { items:[], label: 'page-of-youth', title: 'Page of Youth', url: '/dungeons/page-of-youth'};
        items[25] = { items:[], label: 'hunter-pond', title: 'Hunter Pond', url: '/dungeons/hunter-pond'};
        items[26] = { items:[], label: 'rousing-paradise', title: 'Rousing Paradise', url: '/dungeons/rousing-paradise'};
        items[27] = { items:[], label: 'the-pinnacle', title: 'The Pinnacle', url: '/dungeons/the-pinnacle'};
        items[28] = { items:[], label: 'froggos-fury', title: 'Froggo\'s Fury', url: '/dungeons/froggos-fury'};
        items[29] = { items:[], label: 'masters-footprint', title: 'Master\'s Footprint', url: '/dungeons/masters-footprint'};
        items[30] = { items:[], label: 'aura-ruins', title: 'Aura Ruins', url: '/dungeons/aura-ruins'};
        items[31] = { items:[], label: 'sleeping-lands', title: 'Sleeping Lands', url: '/dungeons/sleeping-lands'};
        items[32] = { items:[], label: 'double-strike-trail', title: 'Double Strike Trail', url: '/dungeons/double-strike-trail'};
        items[33] = { items:[], label: 'gorgers-manor', title: 'Gorger\'s Manor', url: '/dungeons/gorgers-manor'};
        items[34] = { items:[], label: 'storm-forest', title: 'Storm Forest', url: '/dungeons/storm-forest'};
        items[35] = { items:[], label: 'monster-hotspot', title: 'Monster Hotspot', url: '/dungeons/monster-hotspot'};
        items[36] = { items:[], label: 'perilous-rocks', title: 'Perilous Rocks', url: '/dungeons/perilous-rocks'};
        items[37] = { items:[], label: 'trappers-sandbox', title: 'Trapper\'s Sandbox', url: '/dungeons/trappers-sandbox'};
        items[38] = { items:[], label: 'bladeless-wasteland', title: 'Bladeless Waste.', url: '/dungeons/bladeless-wasteland'};
        items[39] = { items:[], label: 'cloister-of-certain-doom', title: 'Cloister of Doom', url: '/dungeons/cloister-of-certain-doom'};
        items[40] = { items:[], label: 'garden-of-destiny', title: 'Garden of Destiny', url: '/dungeons/garden-of-destiny'};
        break;
      default:
        // do nothing
    }
  }

  return (
    <li className={calculatedClassName}>
      {title && (
        <Link to={url}>
          {title}
          {!config.sidebar.frontLine && title && hasChildren ? (
            <button onClick={collapse} aria-label="collapse" className="collapser">
              {!isCollapsed ? <OpenedSvg /> : <ClosedSvg />}
            </button>
          ) : null}
        </Link>
      )}

      {!isCollapsed && hasChildren ? (
        <ul>
          {items.map((item, index) => (
            <TreeNode
              key={item.url + index.toString()}
              setCollapsed={setCollapsed}
              collapsed={collapsed}
              {...item}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default TreeNode;
