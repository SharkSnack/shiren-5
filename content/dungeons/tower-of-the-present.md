---
title: "Tower of the Present"
metaTitle: "Tower of the Present - Shiren the Wanderer: Tower of Fortune Wiki"
metaDescription: "Tower of the Present guide for Shiren the Wanderer: The Tower of Fortune and the Dice of Fate."
---

<div class="pageTopImage screenshot">
  <img src="../images/overworld/tower_of_the_present.jpg"/>
</div>

Medium difficulty among the three dice towers.

Mixers appears right away, so it's a popular spot to synthesize items.

<ul class="quickLinksUL">
  <li><a href="#overview">Overview</a></li>
  <li><a href="#strategy">Strategy</a>
    <ul>
      <li><a href="#general">General</a></li>
      <li><a href="#farming">Farming</a></li>
    </ul>
  </li>
  <li><a href="#monsters">Monsters</a></li>
  <li><a href="#monster-list">Monster List</a></li>
  <li><a href="#items">Items</a></li>
  <li><a href="#traps">Traps</a></li>
  <li><a href="#npcs">NPCs</a></li>
</ul>

# Overview

<table class="dungeonOverview">
  <tr>
    <th>Unlock</th>
    <td class="highlightYellow">Available as soon as you arrive at the Tower of Fortune entrance.</td>
  </tr>
  <tr>
    <th>Entrance</th>
    <td class="highlightYellow">Tower of Fortune entrance (North)</td>
  </tr>
</table>

<table class="dungeonTable">
  <tr>
    <th>Floors</th>
    <td>7F</td>
    <th>Day / Night</th>
    <td>Day</td>
  </tr>
  <tr>
    <th>Bring Items</th>
    <td>Yes</td>
    <th>Allies</th>
    <td>3</td>
  </tr>
  <tr>
    <th>Unidentified</th>
    <td>Bracelets</td>
    <th>New Items</th>
    <td>Yes</td>
  </tr>
  <tr>
    <th>Shops</th>
    <td>Regular, Elite</td>
    <th>Monster Houses</th>
    <td>Regular, Sudden</td>
  </tr>
  <tr>
    <th>Initial Enemies</th>
    <td>7~9</td>
    <th>Spawn Rate</th>
    <td>30 turns</td>
  </tr>
  <tr>
    <th>Ominous aura</th>
    <td>No</td>
    <th>Wind of Kron</th>
    <td>1st: 1700<br/>4th: 2000</td>
  </tr>
  <tr>
    <th>Clear Icon</th>
    <td class="clearIcon"><img src="../images/other/clear_present.png"/></td>
    <th>Reward</th>
    <td>None</td>
  </tr>
</table>

※ Reading a Night-Day Scroll is the only way to change it to night.

# Strategy

### General

Mutaikons and Scorpions lower your strength, decreasing damage dealt by your direct attacks and arrows.<br/>
Curse Girls curse or seal items, making equipment unremovable, nullifying runes, or making items unusable.<br/>
Fearabbits warp creatures in the room to itself, so you risk getting surrounded if it's in the room with other monsters.<br/>
Gyazas convert most non-direct attack effects to 2 damage, but they're not a problem unless you get surrounded.

Exorcism Scroll, Cleansing Bracelet, Antidote Grass, Peach, Heal Pot, Fixer Scroll counteract poison and curses.<br/>
Cleansing Bracelet is ideal since it negates all poison, including the Slow effect from Mutaikon's Poison Grass.<br/>
If you don't have these items, use arrows to soften monsters before they're adjacent to you.

Swordsman can disarm your equipped shield, sending it flying behind you.<br/>
The shield vanishes if it hits an enemy or lands on a water or air tile, so fight with your back against a wall or ally.<br/>
(Allies always dodge equipment in Shiren 5 unless they're afflicted by select status conditions)

Mudkins have surprisingly high HP, so unequip your weapon and shield before fighting it unless they're plated.<br/>
Unequip both weapon and shield in 1 turn by inserting them into a Preservation Pot using multi-select. (R button)<br/>
Lastly, Mudkins can occasionally duplicate themselves when they receive damage.

### Farming

Mixers appear on 1-3F, making this the earliest point in the game to synthesize items without a Synthesis Pot.<br/>
However, its spawn rate is very low, so it might be best to hurry forward if you don't have much food left.<br/>
On average, you'll see roughly 3\~4 Mixers before the wind starts to blow on a floor.

Synthesize runes onto your weapon and shield using the items you've collected up to this point.

Weapon:

- Warp Grass → <span class="greenText">Anti-Floating</span> : x1.35 damage to Floating types.
- Sleepy Grass → <span class="greenText">Sedating</span> : 12% chance to inflict Asleep status.
- Paralysis Staff → <span class="greenText">Paralyzing</span> : 12% chance to inflict Paralyzed status.
- Confusion Grass → <span class="greenText">Confusing</span> : 12% chance to inflict Confused status.
- Weeds → <span class="greenText">Anti-Plant</span> : x1.35 damage to Plant types.
- Antidote Grass → <span class="greenText">Anti-Drain</span> : x1.35 damage to Drain types.
- Dragon Grass → <span class="greenText">Anti-Dragon</span> : x1.35 damage to Dragon types.
- Iron Arrow → <span class="greenText">Anti-Metal</span> : x1.35 damage to Metal types.

Shield:

- Diet Shield → <span class="greenText">CR Diet</span> : Fullness depletes at 1/2 speed.
- Binary Shield → <span class="greenText">Bit</span> : Reduce damage by 50% if last digit of HP is 1 or 0.
- Day Shield → <span class="greenText">Diurnal</span> : Reduce damage by 25% from day monsters.
- Dragon Grass → <span class="greenText">Anti-Fire</span> : Reduce fire damage by 50%.
- Stomach Expander + Perception Grass x 2 → <span class="greenText">Agile</span> : Raise your evasion from 12% → 22%.

Use a sub weapon to defeat Mixers when synthesizing your main weapon, especially if your strength is low.<br/>
If you have a Cleansing Bracelet, use Mutaikon's Poison Grass throw as a food source while waiting for Mixers.<br/>
A regular Peach restores strength to max, so it's not that bad if you lose strength while waiting for Mixers.<br/>
(Hard Peach ripens into a regular Peach as you advance floors)

# Monsters

<button id="hideMonTblImgBtn" onClick={()=>{var mon_imgs = document.querySelectorAll('#monsterTable img');mon_imgs.forEach(e => e.classList.toggle('hidden'));}}>Toggle Monster Images</button>

Hover over or tap a monster's name for details.<br/>Monster Colors: <span class="farm">Farming</span>, <span class="useful">Useful</span>, <span class="items">Destroys Items</span>, <span class="danger">Dangerous</span>, <span class="extreme">Very Dangerous</span>

<table id="monsterTable" class="monsterTable">
  <thead>
    <tr>
      <th>F</th>
      <th colspan="5">Monsters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4" class="centeredText">1</td>
      <td class="day useful"><div class="tooltip"><img src="../images/monsters_s/20-1.png"/> Mixer<div class="tooltiptext">- <span class="tipName">Mixer</span> -<br/><span class="tipHP">HP:</span> 40 <span class="tipAP">AP:</span> 15 <span class="tipDP">DP:</span> 6 <span class="tipExp">Exp:</span> 15 <span class="tipGP">GP:</span> 8<br/><span class="tipType">Type:</span> Normal <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 0% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 0%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Eats up to 2 thrown items and synthesizes them. Gains 1 stage of Buffed status each time it eats an item.</div></div></td>
      <td class="day items"><div class="tooltip"><img src="../images/monsters_s/14-1.png"/> Curse Girl<div class="tooltiptext">- <span class="tipName">Curse Girl</span> -<br/><span class="tipHP">HP:</span> 20 <span class="tipAP">AP:</span> 18 <span class="tipDP">DP:</span> 4 <span class="tipExp">Exp:</span> 24 <span class="tipGP">GP:</span> 7<br/><span class="tipType">Type:</span> Normal <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 24% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 0%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Curses or seals 1 item when adjacent.</div></div></td>
      <td class="day"><div class="tooltip"><img src="../images/monsters_s/22-1.png"/> Mutaikon<div class="tooltiptext">- <span class="tipName">Mutaikon</span> -<br/><span class="tipHP">HP:</span> 42 <span class="tipAP">AP:</span> 15 <span class="tipDP">DP:</span> 12 <span class="tipExp">Exp:</span> 49 <span class="tipGP">GP:</span> 8<br/><span class="tipType">Type:</span> Plant <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 19% (near), 19% (far)<br/><span class="tipItem">Item Drop Rate:</span> 6%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Throws Poison Grass 2 tiles ahead. Only drops Poison Grass.</div></div></td>
      <td class="day"><div class="tooltip"><img src="../images/monsters_s/16-1.png"/> Gyaza<div class="tooltiptext">- <span class="tipName">Gyaza</span> -<br/><span class="tipHP">HP:</span> 28 <span class="tipAP">AP:</span> 19 <span class="tipDP">DP:</span> 10 <span class="tipExp">Exp:</span> 45 <span class="tipGP">GP:</span> 20<br/><span class="tipType">Type:</span> Aquatic <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 0% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Converts most effects received other than direct attacks to 2 damage.</div></div></td>
      <td class="day"><div class="tooltip"><img src="../images/monsters_s/21-1.png"/> Scorpion<div class="tooltiptext">- <span class="tipName">Scorpion</span> -<br/><span class="tipHP">HP:</span> 45 <span class="tipAP">AP:</span> 21 <span class="tipDP">DP:</span> 9 <span class="tipExp">Exp:</span> 41 <span class="tipGP">GP:</span> 12<br/><span class="tipType">Type:</span> Drain <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 19% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 2%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Lowers Strength by 1 when adjacent.</div></div></td>
    </tr>
    <tr>
      <td class="day danger"><div class="tooltip"><img src="../images/monsters_s/15-1.png"/> Fearabbit<div class="tooltiptext">- <span class="tipName">Fearabbit</span> -<br/><span class="tipHP">HP:</span> 20 <span class="tipAP">AP:</span> 15 <span class="tipDP">DP:</span> 4 <span class="tipExp">Exp:</span> 15 <span class="tipGP">GP:</span> 9<br/><span class="tipType">Type:</span> Magic <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 21% (near), 21% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Attracts up to 3 creatures including Shiren to itself from anywhere in the same room.</div></div></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td class="highlightGray3"><div class="tooltip"><img src="../images/monsters_s/42-5.png"/> Dark DJ Mage<div class="tooltiptext">- <span class="tipName">Dark DJ Mage</span> -<br/><span class="tipHP">HP:</span> 22 <span class="tipAP">AP:</span> 16 <span class="tipDP">DP:</span> 2 <span class="tipExp">Exp:</span> 22 <span class="tipGP">GP:</span> 18<br/><span class="tipType">Type:</span> Magic <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 64% (near), 47% (far)<br/><span class="tipItem">Item Drop Rate:</span> 6%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Resists non-ability attacks. Fires a magic bullet with a random effect in a straight line: Warp, knockback, switch positions, or increase action speed by 1 stage.</div></div></td>
      <td class="highlightGray3"><div class="tooltip"><img src="../images/monsters_s/18-5.png"/> Evil Floaty<div class="tooltiptext">- <span class="tipName">Evil Floaty</span> -<br/><span class="tipHP">HP:</span> 33 <span class="tipAP">AP:</span> 24 <span class="tipDP">DP:</span> 2 <span class="tipExp">Exp:</span> 40 <span class="tipGP">GP:</span> 14<br/><span class="tipType">Type:</span> Normal <span class="tipSpeed">Speed:</span> Swift 1<br/><span class="tipSpecial">Sp.Atk Rate:</span> 23% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Resists non-ability attacks. Initially Napping in a group of 3. Shiren can be warped 1~3 floors when surrounded by 3 Evil Floaty monsters.</div></div></td>
      <td class="highlightGray3 itemsNight"><div class="tooltip"><img src="../images/monsters_s/39-5.png"/> Evil Gazer<div class="tooltiptext">- <span class="tipName">Evil Gazer</span> -<br/><span class="tipHP">HP:</span> 33 <span class="tipAP">AP:</span> 24 <span class="tipDP">DP:</span> 3 <span class="tipExp">Exp:</span> 40 <span class="tipGP">GP:</span> 10<br/><span class="tipType">Type:</span> Cyclops/Magic <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 43% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 2%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Resists non-ability attacks. Hypnotizes Shiren when adjacent, forcing either item usage or an attack in a random direction.</div></div></td>
      <td class="highlightGray3"><div class="tooltip"><img src="../images/monsters_s/37-5.png"/> Dark Eligan<div class="tooltiptext">- <span class="tipName">Dark Eligan</span> -<br/><span class="tipHP">HP:</span> 33 <span class="tipAP">AP:</span> 24 <span class="tipDP">DP:</span> 4 <span class="tipExp">Exp:</span> 40 <span class="tipGP">GP:</span> 24<br/><span class="tipType">Type:</span> Normal <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 0% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Resists non-ability attacks.</div></div></td>
      <td class="highlightGray3 itemsNight"><div class="tooltip"><img src="../images/monsters_s/35-5.png"/> Wicked Scoopie<div class="tooltiptext">- <span class="tipName">Wicked Scoopie</span> -<br/><span class="tipHP">HP:</span> 22 <span class="tipAP">AP:</span> 16 <span class="tipDP">DP:</span> 2 <span class="tipExp">Exp:</span> 22 <span class="tipGP">GP:</span> 20<br/><span class="tipType">Type:</span> Metal <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 16% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Resists non-ability attacks. Shovels dirt at an adjacent target, which can hit through corners. Dirt fills 1 pot in your inventory when it hits Shiren, or inflicts Blind status when it hits an ally. Dirt in pots eventually changes to grass items when advancing floors.</div></div></td>
    </tr>
    <tr>
      <td class="highlightGray3"><div class="tooltip"><img src="../images/monsters_s/22-5.png"/> Dark Mutaikon<div class="tooltiptext">- <span class="tipName">Dark Mutaikon</span> -<br/><span class="tipHP">HP:</span> 33 <span class="tipAP">AP:</span> 20 <span class="tipDP">DP:</span> 3 <span class="tipExp">Exp:</span> 40 <span class="tipGP">GP:</span> 7<br/><span class="tipType">Type:</span> Plant <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 19% (near), 19% (far)<br/><span class="tipItem">Item Drop Rate:</span> 6%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Resists non-ability attacks. Throws Poison Grass 2 tiles ahead. Only drops Poison Grass.</div></div></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td colspan="6" class="purpleDivider"></td>
    </tr>
    <tr>
      <td rowspan="3" class="centeredText">2</td>
      <td class="day useful"><div class="tooltip"><img src="../images/monsters_s/20-1.png"/> Mixer<div class="tooltiptext">- <span class="tipName">Mixer</span> -<br/><span class="tipHP">HP:</span> 40 <span class="tipAP">AP:</span> 15 <span class="tipDP">DP:</span> 6 <span class="tipExp">Exp:</span> 15 <span class="tipGP">GP:</span> 8<br/><span class="tipType">Type:</span> Normal <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 0% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 0%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Eats up to 2 thrown items and synthesizes them. Gains 1 stage of Buffed status each time it eats an item.</div></div></td>
      <td class="day items"><div class="tooltip"><img src="../images/monsters_s/14-1.png"/> Curse Girl<div class="tooltiptext">- <span class="tipName">Curse Girl</span> -<br/><span class="tipHP">HP:</span> 20 <span class="tipAP">AP:</span> 18 <span class="tipDP">DP:</span> 4 <span class="tipExp">Exp:</span> 24 <span class="tipGP">GP:</span> 7<br/><span class="tipType">Type:</span> Normal <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 24% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 0%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Curses or seals 1 item when adjacent.</div></div></td>
      <td class="day"><div class="tooltip"><img src="../images/monsters_s/22-1.png"/> Mutaikon<div class="tooltiptext">- <span class="tipName">Mutaikon</span> -<br/><span class="tipHP">HP:</span> 42 <span class="tipAP">AP:</span> 15 <span class="tipDP">DP:</span> 12 <span class="tipExp">Exp:</span> 49 <span class="tipGP">GP:</span> 8<br/><span class="tipType">Type:</span> Plant <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 19% (near), 19% (far)<br/><span class="tipItem">Item Drop Rate:</span> 6%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Throws Poison Grass 2 tiles ahead. Only drops Poison Grass.</div></div></td>
      <td class="day"><div class="tooltip"><img src="../images/monsters_s/16-1.png"/> Gyaza<div class="tooltiptext">- <span class="tipName">Gyaza</span> -<br/><span class="tipHP">HP:</span> 28 <span class="tipAP">AP:</span> 19 <span class="tipDP">DP:</span> 10 <span class="tipExp">Exp:</span> 45 <span class="tipGP">GP:</span> 20<br/><span class="tipType">Type:</span> Aquatic <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 0% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Converts most effects received other than direct attacks to 2 damage.</div></div></td>
      <td class="day"><div class="tooltip"><img src="../images/monsters_s/21-1.png"/> Scorpion<div class="tooltiptext">- <span class="tipName">Scorpion</span> -<br/><span class="tipHP">HP:</span> 45 <span class="tipAP">AP:</span> 21 <span class="tipDP">DP:</span> 9 <span class="tipExp">Exp:</span> 41 <span class="tipGP">GP:</span> 12<br/><span class="tipType">Type:</span> Drain <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 19% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 2%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Lowers Strength by 1 when adjacent.</div></div></td>
    </tr>
    <tr>
      <td class="highlightGray3 dangerNight"><div class="tooltip"><img src="../images/monsters_s/30-5.png"/> Dark Foly<div class="tooltiptext">- <span class="tipName">Dark Foly</span> -<br/><span class="tipHP">HP:</span> 33 <span class="tipAP">AP:</span> 24 <span class="tipDP">DP:</span> 4 <span class="tipExp">Exp:</span> 8 <span class="tipGP">GP:</span> 19<br/><span class="tipType">Type:</span> Cyclops/Floating <span class="tipSpeed">Speed:</span> Swift 1<br/><span class="tipSpecial">Sp.Atk Rate:</span> 100% (near), 100% (far)<br/><span class="tipItem">Item Drop Rate:</span> 0%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Resists non-ability attacks. Moves along the wall in rooms, changes color and abilities every 8 turns. <span class='extremeNight'>Nullifies and reflects direct attacks.</span> <span class='farmNight'>Drops 15 damage lightning on all creatures in the room after it acts.</span> <span class='usefulNight'>Heals Shiren's HP by 100 after being hit with a direct attack.</span> <span class='itemsNight'>Counters with Berserk, Grounded, Inaccurate, Confused, or Shadow Bound status after being hit with a direct attack.</span></div></div></td>
      <td class="highlightGray3"><div class="tooltip"><img src="../images/monsters_s/18-5.png"/> Evil Floaty<div class="tooltiptext">- <span class="tipName">Evil Floaty</span> -<br/><span class="tipHP">HP:</span> 33 <span class="tipAP">AP:</span> 24 <span class="tipDP">DP:</span> 2 <span class="tipExp">Exp:</span> 40 <span class="tipGP">GP:</span> 14<br/><span class="tipType">Type:</span> Normal <span class="tipSpeed">Speed:</span> Swift 1<br/><span class="tipSpecial">Sp.Atk Rate:</span> 23% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Resists non-ability attacks. Initially Napping in a group of 3. Shiren can be warped 1~3 floors when surrounded by 3 Evil Floaty monsters.</div></div></td>
      <td class="highlightGray3 itemsNight"><div class="tooltip"><img src="../images/monsters_s/39-5.png"/> Evil Gazer<div class="tooltiptext">- <span class="tipName">Evil Gazer</span> -<br/><span class="tipHP">HP:</span> 33 <span class="tipAP">AP:</span> 24 <span class="tipDP">DP:</span> 3 <span class="tipExp">Exp:</span> 40 <span class="tipGP">GP:</span> 10<br/><span class="tipType">Type:</span> Cyclops/Magic <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 43% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 2%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Resists non-ability attacks. Hypnotizes Shiren when adjacent, forcing either item usage or an attack in a random direction.</div></div></td>
      <td class="highlightGray3"><div class="tooltip"><img src="../images/monsters_s/37-5.png"/> Dark Eligan<div class="tooltiptext">- <span class="tipName">Dark Eligan</span> -<br/><span class="tipHP">HP:</span> 33 <span class="tipAP">AP:</span> 24 <span class="tipDP">DP:</span> 4 <span class="tipExp">Exp:</span> 40 <span class="tipGP">GP:</span> 24<br/><span class="tipType">Type:</span> Normal <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 0% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Resists non-ability attacks.</div></div></td>
      <td class="highlightGray3"><div class="tooltip"><img src="../images/monsters_s/48-5.png"/> Evil Firepuff<div class="tooltiptext">- <span class="tipName">Evil Firepuff</span> -<br/><span class="tipHP">HP:</span> 33 <span class="tipAP">AP:</span> 24 <span class="tipDP">DP:</span> 4 <span class="tipExp">Exp:</span> 40 <span class="tipGP">GP:</span> 24<br/><span class="tipType">Type:</span> Dragon/Floating <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 89% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Resists non-ability attacks. Breathes 20 damage fire when adjacent, which can hit through corners. Occasionally fails at breathing fire.</div></div></td>
    </tr>
    <tr>
      <td class="highlightGray3"><div class="tooltip"><img src="../images/monsters_s/22-5.png"/> Dark Mutaikon<div class="tooltiptext">- <span class="tipName">Dark Mutaikon</span> -<br/><span class="tipHP">HP:</span> 33 <span class="tipAP">AP:</span> 20 <span class="tipDP">DP:</span> 3 <span class="tipExp">Exp:</span> 40 <span class="tipGP">GP:</span> 7<br/><span class="tipType">Type:</span> Plant <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 19% (near), 19% (far)<br/><span class="tipItem">Item Drop Rate:</span> 6%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Resists non-ability attacks. Throws Poison Grass 2 tiles ahead. Only drops Poison Grass.</div></div></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td colspan="6" class="purpleDivider"></td>
    </tr>
    <tr>
      <td rowspan="2" class="centeredText">3</td>
      <td class="day useful"><div class="tooltip"><img src="../images/monsters_s/20-1.png"/> Mixer<div class="tooltiptext">- <span class="tipName">Mixer</span> -<br/><span class="tipHP">HP:</span> 40 <span class="tipAP">AP:</span> 15 <span class="tipDP">DP:</span> 6 <span class="tipExp">Exp:</span> 15 <span class="tipGP">GP:</span> 8<br/><span class="tipType">Type:</span> Normal <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 0% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 0%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Eats up to 2 thrown items and synthesizes them. Gains 1 stage of Buffed status each time it eats an item.</div></div></td>
      <td class="day"><div class="tooltip"><img src="../images/monsters_s/23-1.png"/> Naptapir<div class="tooltiptext">- <span class="tipName">Naptapir</span> -<br/><span class="tipHP">HP:</span> 32 <span class="tipAP">AP:</span> 27 <span class="tipDP">DP:</span> 11 <span class="tipExp">Exp:</span> 46 <span class="tipGP">GP:</span> 10<br/><span class="tipType">Type:</span> Normal <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 23% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Initially Napping, will not wake up when Shiren enters or exits the room. Occasionally inflicts Asleep status in a 1 tile radius when it's Napping, Asleep, or Sound Asleep. Chance to yawn when slain, inflicting Asleep status in a 1 tile radius.</div></div></td>
      <td class="day"><div class="tooltip"><img src="../images/monsters_s/17-1.png"/> Pumphantasm<div class="tooltiptext">- <span class="tipName">Pumphantasm</span> -<br/><span class="tipHP">HP:</span> 35 <span class="tipAP">AP:</span> 20 <span class="tipDP">DP:</span> 12 <span class="tipExp">Exp:</span> 43 <span class="tipGP">GP:</span> 24<br/><span class="tipType">Type:</span> Plant/Floating <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 0% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 0%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Can pass through walls. Unpredictable movement, but slowly approaches Shiren.</div></div></td>
      <td class="day"><div class="tooltip"><img src="../images/monsters_s/16-1.png"/> Gyaza<div class="tooltiptext">- <span class="tipName">Gyaza</span> -<br/><span class="tipHP">HP:</span> 28 <span class="tipAP">AP:</span> 19 <span class="tipDP">DP:</span> 10 <span class="tipExp">Exp:</span> 45 <span class="tipGP">GP:</span> 20<br/><span class="tipType">Type:</span> Aquatic <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 0% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Converts most effects received other than direct attacks to 2 damage.</div></div></td>
      <td class="day"><div class="tooltip"><img src="../images/monsters_s/21-1.png"/> Scorpion<div class="tooltiptext">- <span class="tipName">Scorpion</span> -<br/><span class="tipHP">HP:</span> 45 <span class="tipAP">AP:</span> 21 <span class="tipDP">DP:</span> 9 <span class="tipExp">Exp:</span> 41 <span class="tipGP">GP:</span> 12<br/><span class="tipType">Type:</span> Drain <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 19% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 2%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Lowers Strength by 1 when adjacent.</div></div></td>
    </tr>
    <tr>
      <td class="highlightGray3"><div class="tooltip"><img src="../images/monsters_s/9-5.png"/> Dark Blade Bee<div class="tooltiptext">- <span class="tipName">Dark Blade Bee</span> -<br/><span class="tipHP">HP:</span> 23 <span class="tipAP">AP:</span> 14 <span class="tipDP">DP:</span> 1 <span class="tipExp">Exp:</span> 18 <span class="tipGP">GP:</span> 15<br/><span class="tipType">Type:</span> Floating <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 16% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Resists non-ability attacks. Occasionally retreats after attacking. Stinger has double AP and inflicts Confused status, but it also collapses afterward.</div></div></td>
      <td class="highlightGray3"><div class="tooltip"><img src="../images/monsters_s/18-5.png"/> Evil Floaty<div class="tooltiptext">- <span class="tipName">Evil Floaty</span> -<br/><span class="tipHP">HP:</span> 33 <span class="tipAP">AP:</span> 24 <span class="tipDP">DP:</span> 2 <span class="tipExp">Exp:</span> 40 <span class="tipGP">GP:</span> 14<br/><span class="tipType">Type:</span> Normal <span class="tipSpeed">Speed:</span> Swift 1<br/><span class="tipSpecial">Sp.Atk Rate:</span> 23% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Resists non-ability attacks. Initially Napping in a group of 3. Shiren can be warped 1~3 floors when surrounded by 3 Evil Floaty monsters.</div></div></td>
      <td class="highlightGray3"><div class="tooltip"><img src="../images/monsters_s/4-5.png"/> Hateful Seedie<div class="tooltiptext">- <span class="tipName">Hateful Seedie</span> -<br/><span class="tipHP">HP:</span> 35 <span class="tipAP">AP:</span> 30 <span class="tipDP">DP:</span> 4 <span class="tipExp">Exp:</span> 56 <span class="tipGP">GP:</span> 35<br/><span class="tipType">Type:</span> Plant <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 0% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Resists non-ability attacks.</div></div></td>
      <td class="highlightGray3"><div class="tooltip"><img src="../images/monsters_s/37-5.png"/> Dark Eligan<div class="tooltiptext">- <span class="tipName">Dark Eligan</span> -<br/><span class="tipHP">HP:</span> 33 <span class="tipAP">AP:</span> 24 <span class="tipDP">DP:</span> 4 <span class="tipExp">Exp:</span> 40 <span class="tipGP">GP:</span> 24<br/><span class="tipType">Type:</span> Normal <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 0% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Resists non-ability attacks.</div></div></td>
      <td class="highlightGray3"><div class="tooltip"><img src="../images/monsters_s/48-5.png"/> Evil Firepuff<div class="tooltiptext">- <span class="tipName">Evil Firepuff</span> -<br/><span class="tipHP">HP:</span> 33 <span class="tipAP">AP:</span> 24 <span class="tipDP">DP:</span> 4 <span class="tipExp">Exp:</span> 40 <span class="tipGP">GP:</span> 24<br/><span class="tipType">Type:</span> Dragon/Floating <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 89% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Resists non-ability attacks. Breathes 20 damage fire when adjacent, which can hit through corners. Occasionally fails at breathing fire.</div></div></td>
    </tr>
    <tr>
      <td colspan="6" class="purpleDivider"></td>
    </tr>
    <tr>
      <td rowspan="3" class="centeredText">4</td>
      <td class="day items"><div class="tooltip"><img src="../images/monsters_s/24-1.png"/> Swordsman<div class="tooltiptext">- <span class="tipName">Swordsman</span> -<br/><span class="tipHP">HP:</span> 45 <span class="tipAP">AP:</span> 15 <span class="tipDP">DP:</span> 9 <span class="tipExp">Exp:</span> 36 <span class="tipGP">GP:</span> 40<br/><span class="tipType">Type:</span> Normal <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 19% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 2%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Knocks away Shiren's equipped shield when adjacent, sending it 10 tiles backward.</div></div></td>
      <td class="day"><div class="tooltip"><img src="../images/monsters_s/23-1.png"/> Naptapir<div class="tooltiptext">- <span class="tipName">Naptapir</span> -<br/><span class="tipHP">HP:</span> 32 <span class="tipAP">AP:</span> 27 <span class="tipDP">DP:</span> 11 <span class="tipExp">Exp:</span> 46 <span class="tipGP">GP:</span> 10<br/><span class="tipType">Type:</span> Normal <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 23% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Initially Napping, will not wake up when Shiren enters or exits the room. Occasionally inflicts Asleep status in a 1 tile radius when it's Napping, Asleep, or Sound Asleep. Chance to yawn when slain, inflicting Asleep status in a 1 tile radius.</div></div></td>
      <td class="day"><div class="tooltip"><img src="../images/monsters_s/17-1.png"/> Pumphantasm<div class="tooltiptext">- <span class="tipName">Pumphantasm</span> -<br/><span class="tipHP">HP:</span> 35 <span class="tipAP">AP:</span> 20 <span class="tipDP">DP:</span> 12 <span class="tipExp">Exp:</span> 43 <span class="tipGP">GP:</span> 24<br/><span class="tipType">Type:</span> Plant/Floating <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 0% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 0%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Can pass through walls. Unpredictable movement, but slowly approaches Shiren.</div></div></td>
      <td class="day"><div class="tooltip"><img src="../images/monsters_s/5-2.png"/> Mid Chintala<div class="tooltiptext">- <span class="tipName">Mid Chintala</span> -<br/><span class="tipHP">HP:</span> 45 <span class="tipAP">AP:</span> 15 <span class="tipDP">DP:</span> 9 <span class="tipExp">Exp:</span> 33 <span class="tipGP">GP:</span> 10<br/><span class="tipType">Type:</span> Normal <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 0% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>None.</div></div></td>
      <td class="day"><div class="tooltip"><img src="../images/monsters_s/26-1.png"/> Polygon Spinna<div class="tooltiptext">- <span class="tipName">Polygon Spinna</span> -<br/><span class="tipHP">HP:</span> 45 <span class="tipAP">AP:</span> 15 <span class="tipDP">DP:</span> 9 <span class="tipExp">Exp:</span> 33 <span class="tipGP">GP:</span> 11<br/><span class="tipType">Type:</span> Drain/Magic <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 32% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 2%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Lowers Max HP by 1 or Max Fullness by 3 when adjacent. Warps in front of Shiren when in a room.</div></div></td>
    </tr>
    <tr>
      <td class="day items"><div class="tooltip"><img src="../images/monsters_s/25-1.png"/> Mudkin<div class="tooltiptext">- <span class="tipName">Mudkin</span> -<br/><span class="tipHP">HP:</span> 45 <span class="tipAP">AP:</span> 15 <span class="tipDP">DP:</span> 9 <span class="tipExp">Exp:</span> 33 <span class="tipGP">GP:</span> 7<br/><span class="tipType">Type:</span> Aquatic <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 38% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 0%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Lowers upgrade value of equipped weapon or shield by 1. May also remove the item's tag. Chance to multiply when attacked. Doesn't use direct attacks.</div></div></td>
      <td class="day"><div class="tooltip"><img src="../images/monsters_s/3-2.png"/> Cololum<div class="tooltiptext">- <span class="tipName">Cololum</span> -<br/><span class="tipHP">HP:</span> 45 <span class="tipAP">AP:</span> 15 <span class="tipDP">DP:</span> 9 <span class="tipExp">Exp:</span> 33 <span class="tipGP">GP:</span> 16<br/><span class="tipType">Type:</span> Normal <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 0% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Rolls backward 10 tiles when slain by a direct attack, damaging anything it hits equal to damage received.</div></div></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td class="highlightGray3"><div class="tooltip"><img src="../images/monsters_s/9-5.png"/> Dark Blade Bee<div class="tooltiptext">- <span class="tipName">Dark Blade Bee</span> -<br/><span class="tipHP">HP:</span> 23 <span class="tipAP">AP:</span> 14 <span class="tipDP">DP:</span> 1 <span class="tipExp">Exp:</span> 18 <span class="tipGP">GP:</span> 15<br/><span class="tipType">Type:</span> Floating <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 16% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Resists non-ability attacks. Occasionally retreats after attacking. Stinger has double AP and inflicts Confused status, but it also collapses afterward.</div></div></td>
      <td class="highlightGray3"><div class="tooltip"><img src="../images/monsters_s/52-5.png"/> Bad Moseal<div class="tooltiptext">- <span class="tipName">Bad Moseal</span> -<br/><span class="tipHP">HP:</span> 23 <span class="tipAP">AP:</span> 18 <span class="tipDP">DP:</span> 1 <span class="tipExp">Exp:</span> 18 <span class="tipGP">GP:</span> 30<br/><span class="tipType">Type:</span> Aquatic <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 50% (near), 32% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Resists non-ability attacks. Performs a tackle that deals 15 damage when lined up vertically. Turns Apathetic after tackling. Doesn't move on its own.</div></div></td>
      <td class="highlightGray3"><div class="tooltip"><img src="../images/monsters_s/4-5.png"/> Hateful Seedie<div class="tooltiptext">- <span class="tipName">Hateful Seedie</span> -<br/><span class="tipHP">HP:</span> 35 <span class="tipAP">AP:</span> 30 <span class="tipDP">DP:</span> 4 <span class="tipExp">Exp:</span> 56 <span class="tipGP">GP:</span> 35<br/><span class="tipType">Type:</span> Plant <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 0% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Resists non-ability attacks.</div></div></td>
      <td class="highlightGray3"><div class="tooltip"><img src="../images/monsters_s/28-5.png"/> Mean Cheer-Ham<div class="tooltiptext">- <span class="tipName">Mean Cheer-Ham</span> -<br/><span class="tipHP">HP:</span> 23 <span class="tipAP">AP:</span> 14 <span class="tipDP">DP:</span> 1 <span class="tipExp">Exp:</span> 18 <span class="tipGP">GP:</span> 17<br/><span class="tipType">Type:</span> Normal <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 0% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Resists non-ability attacks. Runs away from Shiren, but attacks when cornered. Moves toward monsters in view. Cheers for adjacent creatures, raising AP by 1 stage and letting them survive a fatal hit.</div></div></td>
      <td></td>
    </tr>
    <tr>
      <td colspan="6" class="purpleDivider"></td>
    </tr>
    <tr>
      <td rowspan="3" class="centeredText">5</td>
      <td class="day items"><div class="tooltip"><img src="../images/monsters_s/24-1.png"/> Swordsman<div class="tooltiptext">- <span class="tipName">Swordsman</span> -<br/><span class="tipHP">HP:</span> 45 <span class="tipAP">AP:</span> 15 <span class="tipDP">DP:</span> 9 <span class="tipExp">Exp:</span> 36 <span class="tipGP">GP:</span> 40<br/><span class="tipType">Type:</span> Normal <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 19% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 2%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Knocks away Shiren's equipped shield when adjacent, sending it 10 tiles backward.</div></div></td>
      <td class="day"><div class="tooltip"><img src="../images/monsters_s/27-1.png"/> Metalhead<div class="tooltiptext">- <span class="tipName">Metalhead</span> -<br/><span class="tipHP">HP:</span> 55 <span class="tipAP">AP:</span> 19 <span class="tipDP">DP:</span> 11 <span class="tipExp">Exp:</span> 55 <span class="tipGP">GP:</span> 15<br/><span class="tipType">Type:</span> Cyclops <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 34% (near), 34% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Attacks 2 tiles ahead and through corners. Charges strength to deal double damage on the next turn.</div></div></td>
      <td class="day"><div class="tooltip"><img src="../images/monsters_s/17-1.png"/> Pumphantasm<div class="tooltiptext">- <span class="tipName">Pumphantasm</span> -<br/><span class="tipHP">HP:</span> 35 <span class="tipAP">AP:</span> 20 <span class="tipDP">DP:</span> 12 <span class="tipExp">Exp:</span> 43 <span class="tipGP">GP:</span> 24<br/><span class="tipType">Type:</span> Plant/Floating <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 0% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 0%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Can pass through walls. Unpredictable movement, but slowly approaches Shiren.</div></div></td>
      <td class="day"><div class="tooltip"><img src="../images/monsters_s/5-2.png"/> Mid Chintala<div class="tooltiptext">- <span class="tipName">Mid Chintala</span> -<br/><span class="tipHP">HP:</span> 45 <span class="tipAP">AP:</span> 15 <span class="tipDP">DP:</span> 9 <span class="tipExp">Exp:</span> 33 <span class="tipGP">GP:</span> 10<br/><span class="tipType">Type:</span> Normal <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 0% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>None.</div></div></td>
      <td class="day"><div class="tooltip"><img src="../images/monsters_s/26-1.png"/> Polygon Spinna<div class="tooltiptext">- <span class="tipName">Polygon Spinna</span> -<br/><span class="tipHP">HP:</span> 45 <span class="tipAP">AP:</span> 15 <span class="tipDP">DP:</span> 9 <span class="tipExp">Exp:</span> 33 <span class="tipGP">GP:</span> 11<br/><span class="tipType">Type:</span> Drain/Magic <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 32% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 2%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Lowers Max HP by 1 or Max Fullness by 3 when adjacent. Warps in front of Shiren when in a room.</div></div></td>
    </tr>
    <tr>
      <td class="day items"><div class="tooltip"><img src="../images/monsters_s/25-1.png"/> Mudkin<div class="tooltiptext">- <span class="tipName">Mudkin</span> -<br/><span class="tipHP">HP:</span> 45 <span class="tipAP">AP:</span> 15 <span class="tipDP">DP:</span> 9 <span class="tipExp">Exp:</span> 33 <span class="tipGP">GP:</span> 7<br/><span class="tipType">Type:</span> Aquatic <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 38% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 0%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Lowers upgrade value of equipped weapon or shield by 1. May also remove the item's tag. Chance to multiply when attacked. Doesn't use direct attacks.</div></div></td>
      <td class="day"><div class="tooltip"><img src="../images/monsters_s/3-2.png"/> Cololum<div class="tooltiptext">- <span class="tipName">Cololum</span> -<br/><span class="tipHP">HP:</span> 45 <span class="tipAP">AP:</span> 15 <span class="tipDP">DP:</span> 9 <span class="tipExp">Exp:</span> 33 <span class="tipGP">GP:</span> 16<br/><span class="tipType">Type:</span> Normal <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 0% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Rolls backward 10 tiles when slain by a direct attack, damaging anything it hits equal to damage received.</div></div></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td class="highlightGray3"><div class="tooltip"><img src="../images/monsters_s/9-5.png"/> Dark Blade Bee<div class="tooltiptext">- <span class="tipName">Dark Blade Bee</span> -<br/><span class="tipHP">HP:</span> 23 <span class="tipAP">AP:</span> 14 <span class="tipDP">DP:</span> 1 <span class="tipExp">Exp:</span> 18 <span class="tipGP">GP:</span> 15<br/><span class="tipType">Type:</span> Floating <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 16% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Resists non-ability attacks. Occasionally retreats after attacking. Stinger has double AP and inflicts Confused status, but it also collapses afterward.</div></div></td>
      <td class="highlightGray3"><div class="tooltip"><img src="../images/monsters_s/52-5.png"/> Bad Moseal<div class="tooltiptext">- <span class="tipName">Bad Moseal</span> -<br/><span class="tipHP">HP:</span> 23 <span class="tipAP">AP:</span> 18 <span class="tipDP">DP:</span> 1 <span class="tipExp">Exp:</span> 18 <span class="tipGP">GP:</span> 30<br/><span class="tipType">Type:</span> Aquatic <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 50% (near), 32% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Resists non-ability attacks. Performs a tackle that deals 15 damage when lined up vertically. Turns Apathetic after tackling. Doesn't move on its own.</div></div></td>
      <td class="highlightGray3"><div class="tooltip"><img src="../images/monsters_s/4-5.png"/> Hateful Seedie<div class="tooltiptext">- <span class="tipName">Hateful Seedie</span> -<br/><span class="tipHP">HP:</span> 35 <span class="tipAP">AP:</span> 30 <span class="tipDP">DP:</span> 4 <span class="tipExp">Exp:</span> 56 <span class="tipGP">GP:</span> 35<br/><span class="tipType">Type:</span> Plant <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 0% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Resists non-ability attacks.</div></div></td>
      <td class="highlightGray3"><div class="tooltip"><img src="../images/monsters_s/28-5.png"/> Mean Cheer-Ham<div class="tooltiptext">- <span class="tipName">Mean Cheer-Ham</span> -<br/><span class="tipHP">HP:</span> 23 <span class="tipAP">AP:</span> 14 <span class="tipDP">DP:</span> 1 <span class="tipExp">Exp:</span> 18 <span class="tipGP">GP:</span> 17<br/><span class="tipType">Type:</span> Normal <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 0% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Resists non-ability attacks. Runs away from Shiren, but attacks when cornered. Moves toward monsters in view. Cheers for adjacent creatures, raising AP by 1 stage and letting them survive a fatal hit.</div></div></td>
      <td></td>
    </tr>
    <tr>
      <td colspan="6" class="purpleDivider"></td>
    </tr>
    <tr>
      <td rowspan="3" class="centeredText">6</td>
      <td class="day items"><div class="tooltip"><img src="../images/monsters_s/24-1.png"/> Swordsman<div class="tooltiptext">- <span class="tipName">Swordsman</span> -<br/><span class="tipHP">HP:</span> 45 <span class="tipAP">AP:</span> 15 <span class="tipDP">DP:</span> 9 <span class="tipExp">Exp:</span> 36 <span class="tipGP">GP:</span> 40<br/><span class="tipType">Type:</span> Normal <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 19% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 2%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Knocks away Shiren's equipped shield when adjacent, sending it 10 tiles backward.</div></div></td>
      <td class="day"><div class="tooltip"><img src="../images/monsters_s/27-1.png"/> Metalhead<div class="tooltiptext">- <span class="tipName">Metalhead</span> -<br/><span class="tipHP">HP:</span> 55 <span class="tipAP">AP:</span> 19 <span class="tipDP">DP:</span> 11 <span class="tipExp">Exp:</span> 55 <span class="tipGP">GP:</span> 15<br/><span class="tipType">Type:</span> Cyclops <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 34% (near), 34% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Attacks 2 tiles ahead and through corners. Charges strength to deal double damage on the next turn.</div></div></td>
      <td class="day"><div class="tooltip"><img src="../images/monsters_s/28-1.png"/> Cheer-Ham<div class="tooltiptext">- <span class="tipName">Cheer-Ham</span> -<br/><span class="tipHP">HP:</span> 34 <span class="tipAP">AP:</span> 10 <span class="tipDP">DP:</span> 7 <span class="tipExp">Exp:</span> 28 <span class="tipGP">GP:</span> 5<br/><span class="tipType">Type:</span> Normal <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 0% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Runs away from Shiren, but attacks when cornered. Moves toward monsters in view. Cheers for adjacent creatures, raising AP by 1 stage and letting them survive a fatal hit.</div></div></td>
      <td class="day"><div class="tooltip"><img src="../images/monsters_s/5-2.png"/> Mid Chintala<div class="tooltiptext">- <span class="tipName">Mid Chintala</span> -<br/><span class="tipHP">HP:</span> 45 <span class="tipAP">AP:</span> 15 <span class="tipDP">DP:</span> 9 <span class="tipExp">Exp:</span> 33 <span class="tipGP">GP:</span> 10<br/><span class="tipType">Type:</span> Normal <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 0% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>None.</div></div></td>
      <td class="day"><div class="tooltip"><img src="../images/monsters_s/8-2.png"/> Acrid Nut<div class="tooltiptext">- <span class="tipName">Acrid Nut</span> -<br/><span class="tipHP">HP:</span> 36 <span class="tipAP">AP:</span> 21 <span class="tipDP">DP:</span> 8 <span class="tipExp">Exp:</span> 35 <span class="tipGP">GP:</span> 18<br/><span class="tipType">Type:</span> Plant/Explode <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 0% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 0%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Either doubles experience points (Max: x1024) or explodes (33% chance) each time it eats a thrown item.</div></div></td>
    </tr>
    <tr>
      <td class="day items"><div class="tooltip"><img src="../images/monsters_s/25-1.png"/> Mudkin<div class="tooltiptext">- <span class="tipName">Mudkin</span> -<br/><span class="tipHP">HP:</span> 45 <span class="tipAP">AP:</span> 15 <span class="tipDP">DP:</span> 9 <span class="tipExp">Exp:</span> 33 <span class="tipGP">GP:</span> 7<br/><span class="tipType">Type:</span> Aquatic <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 38% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 0%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Lowers upgrade value of equipped weapon or shield by 1. May also remove the item's tag. Chance to multiply when attacked. Doesn't use direct attacks.</div></div></td>
      <td class="day"><div class="tooltip"><img src="../images/monsters_s/3-2.png"/> Cololum<div class="tooltiptext">- <span class="tipName">Cololum</span> -<br/><span class="tipHP">HP:</span> 45 <span class="tipAP">AP:</span> 15 <span class="tipDP">DP:</span> 9 <span class="tipExp">Exp:</span> 33 <span class="tipGP">GP:</span> 16<br/><span class="tipType">Type:</span> Normal <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 0% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Rolls backward 10 tiles when slain by a direct attack, damaging anything it hits equal to damage received.</div></div></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td class="highlightGray3 itemsNight"><div class="tooltip"><img src="../images/monsters_s/25-6.png"/> Shady Muddy<div class="tooltiptext">- <span class="tipName">Shady Muddy</span> -<br/><span class="tipHP">HP:</span> 27 <span class="tipAP">AP:</span> 26 <span class="tipDP">DP:</span> 3 <span class="tipExp">Exp:</span> 28 <span class="tipGP">GP:</span> 48<br/><span class="tipType">Type:</span> Aquatic <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 56% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 0%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Resists non-ability attacks. Extinguishes an equipped torch. Lowers upgrade value of equipped weapon or shield by 4. May also remove the item's tag. Chance to multiply when attacked. Can use direct attacks.</div></div></td>
      <td class="highlightGray3"><div class="tooltip"><img src="../images/monsters_s/32-6.png"/> Evil Hipadile<div class="tooltiptext">- <span class="tipName">Evil Hipadile</span> -<br/><span class="tipHP">HP:</span> 27 <span class="tipAP">AP:</span> 16 <span class="tipDP">DP:</span> 5 <span class="tipExp">Exp:</span> 100 <span class="tipGP">GP:</span> 75<br/><span class="tipType">Type:</span> Dragon/Aquatic <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 0% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 8%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Resists non-ability attacks. Moves like a chess knight when Shiren is in view. Performs a 25 damage jumping attack when Shiren is in range of a chess knight hop.</div></div></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td colspan="6" class="purpleDivider"></td>
    </tr>
    <tr>
      <td rowspan="2" class="centeredText">7</td>
      <td class="day"><div class="tooltip"><img src="../images/monsters_s/29-1.png"/> Kid Squid<div class="tooltiptext">- <span class="tipName">Kid Squid</span> -<br/><span class="tipHP">HP:</span> 42 <span class="tipAP">AP:</span> 20 <span class="tipDP">DP:</span> 11 <span class="tipExp">Exp:</span> 66 <span class="tipGP">GP:</span> 5<br/><span class="tipType">Type:</span> Aquatic <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 16% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Inflicts Blind status on an adjacent target. Turns into a Squid Sushi Scroll when hit by thrown onigiri.</div></div></td>
      <td class="day"><div class="tooltip"><img src="../images/monsters_s/27-1.png"/> Metalhead<div class="tooltiptext">- <span class="tipName">Metalhead</span> -<br/><span class="tipHP">HP:</span> 55 <span class="tipAP">AP:</span> 19 <span class="tipDP">DP:</span> 11 <span class="tipExp">Exp:</span> 55 <span class="tipGP">GP:</span> 15<br/><span class="tipType">Type:</span> Cyclops <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 34% (near), 34% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Attacks 2 tiles ahead and through corners. Charges strength to deal double damage on the next turn.</div></div></td>
      <td class="day"><div class="tooltip"><img src="../images/monsters_s/28-1.png"/> Cheer-Ham<div class="tooltiptext">- <span class="tipName">Cheer-Ham</span> -<br/><span class="tipHP">HP:</span> 34 <span class="tipAP">AP:</span> 10 <span class="tipDP">DP:</span> 7 <span class="tipExp">Exp:</span> 28 <span class="tipGP">GP:</span> 5<br/><span class="tipType">Type:</span> Normal <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 0% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Runs away from Shiren, but attacks when cornered. Moves toward monsters in view. Cheers for adjacent creatures, raising AP by 1 stage and letting them survive a fatal hit.</div></div></td>
      <td class="day"><div class="tooltip"><img src="../images/monsters_s/31-1.png"/> Bored Kappa<div class="tooltiptext">- <span class="tipName">Bored Kappa</span> -<br/><span class="tipHP">HP:</span> 50 <span class="tipAP">AP:</span> 18 <span class="tipDP">DP:</span> 11 <span class="tipExp">Exp:</span> 48 <span class="tipGP">GP:</span> 7<br/><span class="tipType">Type:</span> Aquatic <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 0% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 4%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Stands on an item and throws it at Shiren when he gets within 3 tiles. Catches projectiles and throws them back at Shiren. Items it throws always miss. Cannot throw weapons, shields, or Gitan.</div></div></td>
      <td class="day"><div class="tooltip"><img src="../images/monsters_s/8-2.png"/> Acrid Nut<div class="tooltiptext">- <span class="tipName">Acrid Nut</span> -<br/><span class="tipHP">HP:</span> 36 <span class="tipAP">AP:</span> 21 <span class="tipDP">DP:</span> 8 <span class="tipExp">Exp:</span> 35 <span class="tipGP">GP:</span> 18<br/><span class="tipType">Type:</span> Plant/Explode <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 0% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 0%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Either doubles experience points (Max: x1024) or explodes (33% chance) each time it eats a thrown item.</div></div></td>
    </tr>
    <tr>
      <td class="highlightGray3 itemsNight"><div class="tooltip"><img src="../images/monsters_s/25-6.png"/> Shady Muddy<div class="tooltiptext">- <span class="tipName">Shady Muddy</span> -<br/><span class="tipHP">HP:</span> 27 <span class="tipAP">AP:</span> 26 <span class="tipDP">DP:</span> 3 <span class="tipExp">Exp:</span> 28 <span class="tipGP">GP:</span> 48<br/><span class="tipType">Type:</span> Aquatic <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 56% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 0%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Resists non-ability attacks. Extinguishes an equipped torch. Lowers upgrade value of equipped weapon or shield by 4. May also remove the item's tag. Chance to multiply when attacked. Can use direct attacks.</div></div></td>
      <td class="highlightGray3"><div class="tooltip"><img src="../images/monsters_s/32-6.png"/> Evil Hipadile<div class="tooltiptext">- <span class="tipName">Evil Hipadile</span> -<br/><span class="tipHP">HP:</span> 27 <span class="tipAP">AP:</span> 16 <span class="tipDP">DP:</span> 5 <span class="tipExp">Exp:</span> 100 <span class="tipGP">GP:</span> 75<br/><span class="tipType">Type:</span> Dragon/Aquatic <span class="tipSpeed">Speed:</span> Normal<br/><span class="tipSpecial">Sp.Atk Rate:</span> 0% (near), 0% (far)<br/><span class="tipItem">Item Drop Rate:</span> 8%<br/>~ <span class="tipAbility">Ability</span> ~<br/>Resists non-ability attacks. Moves like a chess knight when Shiren is in view. Performs a 25 damage jumping attack when Shiren is in range of a chess knight hop.</div></div></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

# Monster List

<div><span class="orangeText2">Orange</span>: Dangerous, <span class="blueText2">Blue</span>: Beneficial</div>

<br/>

<table class="dungeonMonsterList">
  <tr>
    <th>F</th>
    <th>Name</th>
    <th>HP</th>
    <th>AP</th>
    <th>DP</th>
    <th>Exp</th>
    <th>GP</th>
    <th>Rune / Item</th>
    <th>Notes</th>
  </tr>
  <tr>
    <td>1</td>
    <td class="highlightYellow"><span class="orangeText2">Fearabbit</span></td>
    <td>20</td>
    <td>15</td>
    <td>4</td>
    <td>15</td>
    <td>9</td>
    <td><span class="greenText">Anti-Magic</span><br/><span class="greenText">Unmoving</span></td>
    <td>Attracts Shiren and other characters toward itself and attacks.<br/>It won't use its special attack when you're adjacent to it.</td>
  </tr>
  <tr>
    <td>1-2</td>
    <td class="highlightYellow">Curse Girl</td>
    <td>20</td>
    <td>18</td>
    <td>4</td>
    <td>24</td>
    <td>7</td>
    <td><span class="blueText">Anti-Crs. Bracelet</span></td>
    <td><a href="/shiren-5/system/gameplay-basics#blessing-curse-seal">Curses or seals</a> 1 item. Throwing an <a href="/shiren-5/items/scrolls#exorcism-scroll">Exorcism Scroll</a> deals 100 damage.</td>
  </tr>
  <tr>
    <td>1-2</td>
    <td class="highlightYellow">Mutaikon</td>
    <td>42</td>
    <td>15</td>
    <td>12</td>
    <td>49</td>
    <td>8</td>
    <td><span class="greenText">Anti-Plant</span><br/><span class="blueText">Cleansing Bracelet</span></td>
    <td>Throws <a href="/shiren-5/items/grass#poison-grass">Poison Grass</a> at a target up to 2 tiles ahead.<br/>Throwing an <a href="/shiren-5/items/grass#antidote-grass">Antidote Grass</a> deals 50 damage.<br/>It can never drop anything besides Poison Grass when defeated.</td>
  </tr>
  <tr>
    <td>1-3</td>
    <td class="highlightYellow blueText2">Mixer</td>
    <td>40</td>
    <td>15</td>
    <td>6</td>
    <td>15</td>
    <td>8</td>
    <td>-</td>
    <td>Swallows up to 2 items and <a href="/shiren-5/system/gameplay-basics#synthesis">synthesizes</a> them.<br/>Increases attack power by 1 stage every time it swallows an item.<br/>It has a pretty low spawn rate.</td>
  </tr>
  <tr>
    <td>1-3</td>
    <td class="highlightYellow">Gyaza</td>
    <td>28</td>
    <td>19</td>
    <td>10</td>
    <td>45</td>
    <td>20</td>
    <td><span class="greenText">Anti-Aquatic</span></td>
    <td>Converts most non-direct attacks / effects to 2 damage.<br/>Status condition inflicting runes still work, and explosions will one-shot it.</td>
  </tr>
  <tr>
    <td>1-3</td>
    <td class="highlightYellow">Scorpion</td>
    <td>45</td>
    <td>21</td>
    <td>9</td>
    <td>41</td>
    <td>12</td>
    <td><span class="greenText">Anti-Drain</span><br/><span class="blueText">Cleansing Bracelet</span></td>
    <td>Lowers strength by 1 when you're adjacent to it. (Ally: Inflicts <a href="/shiren-5/system/status-conditions#weakened">Weakened</a>)<br/>Throwing an <a href="/shiren-5/items/grass#antidote-grass">Antidote Grass</a> deals 50 damage.</td>
  </tr>
  <tr>
    <td>3-4</td>
    <td class="highlightYellow">Naptapir</td>
    <td>32</td>
    <td>27</td>
    <td>11</td>
    <td>46</td>
    <td>10</td>
    <td><span class="blueText">Alert Bracelet</span></td>
    <td>Occasionally yawns, inflicting <a href="/shiren-5/system/status-conditions#asleep">Asleep</a> status to characters in a 1-tile radius.<br/>Always generated <a href="/shiren-5/system/status-conditions#napping">Napping</a>, and won't wake up when Shiren enters or exits<br/>the room or walks next to it.</td>
  </tr>
  <tr>
    <td>3-5</td>
    <td class="highlightYellow">Pumphantasm</td>
    <td>35</td>
    <td>20</td>
    <td>12</td>
    <td>43</td>
    <td>24</td>
    <td><span class="greenText">Anti-Plant</span><br/><span class="greenText">Anti-Floating</span></td>
    <td>Can move through walls, and also attack from inside walls.<br/>Moves around in an erratic manner.</td>
  </tr>
  <tr>
    <td>4-5</td>
    <td class="highlightYellow">Polygon Spinna</td>
    <td>45</td>
    <td>15</td>
    <td>9</td>
    <td>33</td>
    <td>11</td>
    <td><span class="greenText">Anti-Drain</span><br/><span class="greenText">Anti-Magic</span><br/><span class="blueText">Staunch Bracelet</span></td>
    <td>Warps in front of Shiren inside rooms.<br/>Decreases max fullness by 3 or max HP by 1.</td>
  </tr>
  <tr>
    <td>4-6</td>
    <td class="highlightYellow">Mid Chintala</td>
    <td>45</td>
    <td>15</td>
    <td>9</td>
    <td>33</td>
    <td>10</td>
    <td>-</td>
    <td>Some say it's cuter than Mamel.</td>
  </tr>
  <tr>
    <td>4-6</td>
    <td class="highlightYellow"><span class="orangeText2">Swordsman</span></td>
    <td>45</td>
    <td>15</td>
    <td>9</td>
    <td>36</td>
    <td>40</td>
    <td><span class="blueText">Water Pot</span><br/><span class="blueText">Anti-Parry Brce.</span><br/><span class="blueText">Perceptive Pot</span><br/>Tag equipment</td>
    <td>Parries your equipped shield, flinging it behind you 10 tiles.</td>
  </tr>
  <tr>
    <td>4-6</td>
    <td class="highlightYellow">Mudkin</td>
    <td>45</td>
    <td>15</td>
    <td>9</td>
    <td>33</td>
    <td>7</td>
    <td><span class="greenText">Anti-Aquatic</span><br/><span class="greenText">Rustproof</span></td>
    <td>Doesn't attack, but lowers weapon or shield upgrade value by 1 instead.<br/>Equipment tags can be lost when the item's upgrade value is lowered.<br/>Occasionally duplicates itself when hit by an attack.</td>
  </tr>
  <tr>
    <td>4-6</td>
    <td class="highlightYellow">Cololum</td>
    <td>45</td>
    <td>15</td>
    <td>9</td>
    <td>33</td>
    <td>16</td>
    <td>-</td>
    <td>Rolls backward 10 tiles when slain, dealing damage to any creature it hits.<br/>(Damage is equal to the amount of damage it received when it was slain)</td>
  </tr>
  <tr>
    <td>5-7</td>
    <td class="highlightYellow">Metalhead</td>
    <td>55</td>
    <td>19</td>
    <td>11</td>
    <td>55</td>
    <td>15</td>
    <td><span class="greenText">Anti-Cyclops</span></td>
    <td>Attacks from up to 2 tiles away, and can attack through corners.<br/>Can charge its strength to deal a critical hit on the next turn.<br/>Its charge will be canceled if it moves.</td>
  </tr>
  <tr>
    <td>5-7</td>
    <td class="highlightYellow"><span class="orangeText2">Cheer-Ham</span></td>
    <td>34</td>
    <td>10</td>
    <td>7</td>
    <td>28</td>
    <td>5</td>
    <td>-</td>
    <td>Runs away from Shiren, but attacks if cornered.<br/>Moves toward other monsters to cheer them on (1 tile radius), increasing<br/>attack power by 1 stage and providing <a href="/shiren-5/system/status-conditions#enduring">Enduring</a> status while it cheers.<br/>(Its cheer works for Shiren and his allies as well)</td>
  </tr>
  <tr>
    <td>6-7</td>
    <td class="highlightYellow">Acrid Nut</td>
    <td>36</td>
    <td>21</td>
    <td>8</td>
    <td>35</td>
    <td>18</td>
    <td><span class="greenText">Anti-Plant</span><br/><span class="greenText">Anti-Explode</span></td>
    <td>Eats thrown items and multiplies the amount of exp it gives when slain.<br/>However, there's a chance it'll explode when it swallows an item.<br/>(about 1/3 chance to explode, x2→x4→x8→...→x1024 exp at max)</td>
  </tr>
  <tr>
    <td>7</td>
    <td class="highlightYellow">Bored Kappa</td>
    <td>50</td>
    <td>18</td>
    <td>11</td>
    <td>48</td>
    <td>7</td>
    <td><span class="greenText">Anti-Aquatic</span></td>
    <td>Moves toward items, and throws them at Shiren or his allies.<br/>(Throw misses 100% of the time)</td>
  </tr>
  <tr>
    <td>7</td>
    <td class="highlightYellow">Kid Squid</td>
    <td>42</td>
    <td>20</td>
    <td>11</td>
    <td>66</td>
    <td>5</td>
    <td><span class="greenText">Anti-Aquatic</span></td>
    <td>Inflicts <a href="/shiren-5/system/status-conditions#blind">Blind</a> status when you're adjacent to it.<br/>Transforms into a <a href="/shiren-5/items/scrolls#squid-sushi-scroll">Squid Sushi Scroll</a> if you throw an onigiri at it.</td>
  </tr>
</table>

# Items

- F = Floor, Daytime monster drop
- S = Shop, Shiny Object (yellow), Peddler
- P = Presto Pot
- E = Elite shop, Shiny Object (blue)

<br/>

<table class="dungeonItemTable">
  <tr>
    <th colspan="5" class="highlightPurple3">Weapon</th>
    <th rowspan="65"></th>
    <th colspan="5" class="highlightPurple3">Bracelet</th>
    <th rowspan="65"></th>
    <th colspan="5" class="highlightPurple3">Pot</th>
  </tr>
  <tr>
    <th>Name</th>
    <th>F</th>
    <th>S</th>
    <th>P</th>
    <th>E</th>
    <th>Name</th>
    <th>F</th>
    <th>S</th>
    <th>P</th>
    <th>E</th>
    <th>Name</th>
    <th>F</th>
    <th>S</th>
    <th>P</th>
    <th>E</th>
  </tr>
  <tr>
    <td class="leftText">Ordinary Stick</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td class="leftText">Cleansing Bracelet</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td class="leftText">Preservation Pot</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td class="leftText">Tin Blade</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td class="leftText">Anti-Cnf. Bracelet</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td class="leftText">Ordinary Pot</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td class="leftText">Katana</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td class="leftText">Alert Bracelet</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td class="leftText">Synthesis Pot</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td>X</td>
  </tr>
  <tr>
    <td class="leftText">Beast Fang</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td class="leftText">Anti-Crs. Bracelet</td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
    <td class="leftText">Sale Pot</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td class="leftText">Dotanuki</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td class="leftText">Staunch Bracelet</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td class="leftText">Presto Pot</td>
    <td>X</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td class="leftText">Bladite</td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
    <td class="leftText">Can. Arm Bracelet</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td class="leftText">Blessing Pot</td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
  </tr>
  <tr>
    <td class="leftText">Red Blade</td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
    <td class="leftText">Strength Bracelet</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td class="leftText">Fever Pot</td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
  </tr>
  <tr>
    <td class="leftText">Kabura Katana</td>
    <td></td>
    <td></td>
    <td>X</td>
    <td>X</td>
    <td class="leftText">Growth Bracelet</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td class="leftText">Hide Pot</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td class="leftText">Dull Gold Edge</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td class="leftText">Heal Bracelet</td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
    <td class="leftText">Heal Pot</td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
  </tr>
  <tr>
    <td class="leftText">Bright Blade</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td></td>
    <td class="leftText">Bunch Bracelet</td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
    <td class="leftText">Hilarious Pot</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td class="leftText">Rusty Pickaxe</td>
    <td>X</td>
    <td></td>
    <td></td>
    <td></td>
    <td class="leftText">Monster Detector</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td class="leftText">Klein Pot</td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
  </tr>
  <tr>
    <td class="leftText">Old Mallet</td>
    <td>X</td>
    <td></td>
    <td></td>
    <td></td>
    <td class="leftText">Item Detector</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td class="leftText">Water Pot</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td class="leftText">Sky Splitter</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
    <th colspan="5" class="highlightPurple3">Scroll</th>
    <th colspan="5" class="highlightPurple3">Staff</th>
  </tr>
  <tr>
    <td class="leftText">Water Cutter</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
    <th>Name</th>
    <th>F</th>
    <th>S</th>
    <th>P</th>
    <th>E</th>
    <th>Name</th>
    <th>F</th>
    <th>S</th>
    <th>P</th>
    <th>E</th>
  </tr>
  <tr>
    <td class="leftText">Scythe</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td class="leftText">Confusion Scroll</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td class="leftText">Swap Staff</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
  </tr>
  <tr>
    <td class="leftText">Myopic Masher</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td class="leftText">Slumber Scroll</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td class="leftText">Knockback Staff</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
  </tr>
  <tr>
    <td class="leftText">Magic Masher</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td class="leftText">Vacuum Slash Scrl</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td class="leftText">Transient Staff</td>
    <td>X</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td class="leftText">Drain Dagger</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td class="leftText">Fear Scroll</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td class="leftText">Seal Staff</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td>X</td>
  </tr>
  <tr>
    <td class="leftText">Copper Cleaver</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td class="leftText">Escape Scroll</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td class="leftText">Clone Staff</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td>X</td>
  </tr>
  <tr>
    <td class="leftText">Crescent Katana</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td class="leftText">Navigation Scroll</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td class="leftText">Paralysis Staff</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td>X</td>
  </tr>
  <tr>
    <td class="leftText">Lizard Lasher</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td class="leftText">Dispel Aura Scroll</td>
    <td>X</td>
    <td></td>
    <td></td>
    <td></td>
    <td class="leftText">Empathy Staff</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td>X</td>
  </tr>
  <tr>
    <td class="leftText">Nap Rattle</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td></td>
    <td class="leftText">Trap Deletion Scrl</td>
    <td>X</td>
    <td></td>
    <td></td>
    <td></td>
    <td class="leftText">Slow Staff</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td>X</td>
  </tr>
  <tr>
    <td class="leftText">Shockuto</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td></td>
    <td class="leftText">Identify Scroll</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td class="leftText">Mage Staff</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
  </tr>
  <tr>
    <td class="leftText">Blurry Stick</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td></td>
    <td class="leftText">Exorcism Scroll</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td class="leftText">Electric Staff</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
  </tr>
  <tr>
    <td class="leftText">Sealing Keisaku</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td></td>
    <td class="leftText">Fate Scroll</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td class="leftText">Balance Staff</td>
    <td>X</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td class="leftText">Baffle Axe</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td></td>
    <td class="leftText">Earth Scroll</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td class="leftText">Fort. Staff</td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
  </tr>
  <tr>
    <td class="leftText">Hatchet</td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
    <td class="leftText">Plating Scroll</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <th colspan="5" class="highlightPurple3">Projectile</th>
  </tr>
  <tr>
    <td class="leftText">Shoddy Dirk</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td></td>
    <td class="leftText">Sale Scroll</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
    <th>Name</th>
    <th>F</th>
    <th>S</th>
    <th>P</th>
    <th>E</th>
  </tr>
  <tr>
    <td class="leftText">Glass Dirk</td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
    <td class="leftText">Pot God Scroll</td>
    <td>X</td>
    <td></td>
    <td></td>
    <td>X</td>
    <td class="leftText">Wood Arrow</td>
    <td></td>
    <td>X</td>
    <td>X</td>
    <td></td>
  </tr>
  <tr>
    <td class="leftText">Dirk of Debts</td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
    <td class="leftText">Blessing Scroll</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td class="leftText">Iron Arrow</td>
    <td></td>
    <td>X</td>
    <td>X</td>
    <td></td>
  </tr>
  <tr>
    <td class="leftText">Breeze Blade</td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
    <td class="leftText">Attraction Scroll</td>
    <td>X</td>
    <td></td>
    <td></td>
    <td></td>
    <td class="leftText">Silver Arrow</td>
    <td></td>
    <td>X</td>
    <td>X</td>
    <td></td>
  </tr>
  <tr>
    <td class="leftText">Burning Blade</td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
    <td class="leftText">Gathering Scroll</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td></td>
    <td class="leftText">Critical Arrow</td>
    <td></td>
    <td>X</td>
    <td>X</td>
    <td></td>
  </tr>
  <tr>
    <th colspan="5" class="highlightPurple3">Shield</th>
    <td class="leftText">Oil Scroll</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td class="leftText">Poison Arrow</td>
    <td></td>
    <td>X</td>
    <td>X</td>
    <td></td>
  </tr>
  <tr>
    <th>Name</th>
    <th>F</th>
    <th>S</th>
    <th>P</th>
    <th>E</th>
    <td class="leftText">Sanctuary Scroll</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td class="leftText">Knockback Arrow</td>
    <td></td>
    <td>X</td>
    <td>X</td>
    <td></td>
  </tr>
  <tr>
    <td class="leftText">Plain Targe</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td class="leftText">Recommend. Letter</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td></td>
    <td class="leftText">Truestrike Arrow</td>
    <td></td>
    <td>X</td>
    <td>X</td>
    <td></td>
  </tr>
  <tr>
    <td class="leftText">Tin Shield</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td class="leftText">Fixer Scroll</td>
    <td>X</td>
    <td></td>
    <td></td>
    <td>X</td>
    <td class="leftText">Killer Arrow</td>
    <td></td>
    <td>X</td>
    <td>X</td>
    <td></td>
  </tr>
  <tr>
    <td class="leftText">Iron Trage</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td class="leftText">Gambler's Scroll</td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
    <td class="leftText">Drain Arrow</td>
    <td></td>
    <td>X</td>
    <td>X</td>
    <td></td>
  </tr>
  <tr>
    <td class="leftText">Wolfshead</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td class="leftText">Extinction Scroll</td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
    <td class="leftText">Random Arrow</td>
    <td></td>
    <td>X</td>
    <td>X</td>
    <td></td>
  </tr>
  <tr>
    <td class="leftText">Beast Shield</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td class="leftText">Blank Scroll</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td class="leftText">Rock</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
  </tr>
  <tr>
    <td class="leftText">Targite</td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
    <th colspan="5" class="highlightPurple3">Grass</th>
    <td class="leftText">Porky Rock</td>
    <td></td>
    <td></td>
    <td>X</td>
    <td></td>
  </tr>
  <tr>
    <td class="leftText">Red Shield</td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
    <th>Name</th>
    <th>F</th>
    <th>S</th>
    <th>P</th>
    <th>E</th>
    <th colspan="5" class="highlightPurple3">Food</th>
  </tr>
  <tr>
    <td class="leftText">Fuuma Shield</td>
    <td></td>
    <td></td>
    <td>X</td>
    <td>X</td>
    <td class="leftText">Herb</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <th>Name</th>
    <th>F</th>
    <th>S</th>
    <th>P</th>
    <th>E</th>
  </tr>
  <tr>
    <td class="leftText">Gold Shield</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td class="leftText">Otogiriso</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td class="leftText">Onigiri</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td></td>
  </tr>
  <tr>
    <td class="leftText">Diet Shield</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td class="leftText">Heal Grass</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td class="leftText">Large Onigiri</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td></td>
  </tr>
  <tr>
    <td class="leftText">Heavy Shield</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td class="leftText">Life Grass</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td class="leftText">Special Onigiri</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td class="leftText">Day Shield</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td></td>
    <td class="leftText">Strength Grass</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td class="leftText">Hard Peach</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
  </tr>
  <tr>
    <td class="leftText">Binary Shield</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td></td>
    <td class="leftText">Antidote Grass</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td class="leftText">Peach</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td></td>
  </tr>
  <tr>
    <td class="leftText">Counter Shield</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td class="leftText">Power Up Grass</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td class="leftText">Juicy Peach</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td class="leftText">Student Shield</td>
    <td>X</td>
    <td></td>
    <td></td>
    <td></td>
    <td class="leftText">Upgrade Seed</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
    <th colspan="5" class="highlightPurple3">Other</th>
  </tr>
  <tr>
    <td class="leftText">Bowl Shield</td>
    <td>X</td>
    <td></td>
    <td></td>
    <td></td>
    <td class="leftText">Perception Grass</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <th>Name</th>
    <th>F</th>
    <th>S</th>
    <th>P</th>
    <th>E</th>
  </tr>
  <tr>
    <td class="leftText">Spry Shield</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td></td>
    <td class="leftText">Invincible Grass</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td class="leftText">Red Cat</td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
  </tr>
  <tr>
    <td class="leftText">Blast Shield</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td class="leftText">Swift Grass</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td class="leftText">Orange Cat</td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
  </tr>
  <tr>
    <td class="leftText">Lock Shield</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td class="leftText">Warp Grass</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td class="leftText">Yellow Cat</td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
  </tr>
  <tr>
    <td class="leftText">Safe Shield</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td class="leftText">Dragon Grass</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td class="leftText">Green Cat</td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
  </tr>
  <tr>
    <td class="leftText">Gyadon Blocker</td>
    <td>X</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td class="leftText">Stomach Expander</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td class="leftText">Blue Cat</td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
  </tr>
  <tr>
    <td class="leftText">Snake Shield</td>
    <td>X</td>
    <td></td>
    <td></td>
    <td></td>
    <td class="leftText">Revival Grass</td>
    <td>X</td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td class="leftText">Indigo Cat</td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
  </tr>
  <tr>
    <td class="leftText">Steady Shield</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td></td>
    <td class="leftText">Undo Grass</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td class="leftText">Purple Cat</td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
  </tr>
  <tr>
    <td class="leftText">Anti-Gaze Trge</td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
    <td class="leftText">Cheery Grass</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td>X</td>
    <td class="leftText">Gitan</td>
    <td>X</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td class="leftText">Swap Shield</td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
    <td rowspan="5" colspan="5" class="highlightGray"></td>
    <td rowspan="5" colspan="5" class="highlightGray"></td>
  </tr>
  <tr>
    <td class="leftText">Shoddy Plank</td>
    <td></td>
    <td>X</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td class="leftText">Glass Buckler</td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
  </tr>
  <tr>
    <td class="leftText">Pauper's Plank</td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
  </tr>
  <tr>
    <td class="leftText">Blazing Shield</td>
    <td></td>
    <td></td>
    <td></td>
    <td>X</td>
  </tr>
</table>

# Traps

See [Traps](/system/traps) for details.

<table class="dungeonItemTable">
  <tr>
    <th>Trap</th>
    <th>Floors</th>
    <th rowspan="7"></th>
    <th>Trap</th>
    <th>Floors</th>
  </tr>
  <tr>
    <td class="leftText highlightPurple">Point Switch</td>
    <td>1-7</td>
    <td class="leftText highlightPurple">Spring</td>
    <td>1-7</td>
  </tr>
  <tr>
    <td class="leftText highlightPurple">Shiny Object</td>
    <td>1-7</td>
    <td class="leftText highlightPurple">Log</td>
    <td>1-7</td>
  </tr>
  <tr>
    <td class="leftText highlightPurple">Iron Arrow</td>
    <td>1-7</td>
    <td class="leftText highlightPurple">Slow</td>
    <td>1-7</td>
  </tr>
  <tr>
    <td class="leftText highlightPurple">Poison Arrow</td>
    <td>1-7</td>
    <td class="leftText highlightPurple">Rage</td>
    <td>1-7</td>
  </tr>
  <tr>
    <td class="leftText highlightPurple">Rust</td>
    <td>1-7</td>
    <td class="leftText highlightPurple">Hunger</td>
    <td>1-7</td>
  </tr>
  <tr>
    <td class="leftText highlightPurple">Strip</td>
    <td>1-7</td>
    <td colspan="2" class="highlightGray"></td>
  </tr>
</table>

# NPCs

See [NPCs](/system/npcs) for details.

<table class="dungeonItemTable">
  <tr>
    <th>NPC</th>
    <th>Floors</th>
    <th rowspan="15"></th>
    <th>NPC</th>
    <th>Floors</th>
  </tr>
  <tr>
    <td class="leftText highlightGreen">Apprentice</td>
    <td>1-4</td>
    <td class="leftText highlightGreen">Upgrader</td>
    <td>1-7</td>
  </tr>
  <tr>
    <td class="leftText highlightGreen">Appraiser</td>
    <td>1-4</td>
    <td class="leftText highlightGreen">Researcher</td>
    <td>1-7</td>
  </tr>
  <tr>
    <td class="leftText highlightGreen">Curse Breaker</td>
    <td>1-4</td>
    <td class="leftText highlightGreen">Connoisseur</td>
    <td>1-7</td>
  </tr>
  <tr>
    <td class="leftText highlightGreen">Boy</td>
    <td>1-4</td>
    <td class="leftText highlightGreen">Lost Soul</td>
    <td>1-7</td>
  </tr>
  <tr>
    <td class="leftText highlightGreen">Madam Ateska</td>
    <td>1-6</td>
    <td class="leftText highlightGreen">Gambler</td>
    <td>1-7</td>
  </tr>
  <tr>
    <td class="leftText highlightGreen">Kojirouta</td>
    <td>1-7</td>
    <td class="leftText highlightGreen">Tagger</td>
    <td>1-7</td>
  </tr>
  <tr>
    <td class="leftText highlightGreen">Gen</td>
    <td>1-7</td>
    <td class="leftText highlightGreen">Calligrapher</td>
    <td>1-7</td>
  </tr>
  <tr>
    <td class="leftText highlightGreen">Tao</td>
    <td>1-7</td>
    <td class="leftText highlightGreen">Blacksmith 1</td>
    <td>4-7</td>
  </tr>
  <tr>
    <td class="leftText highlightGreen">Okon</td>
    <td>1-7</td>
    <td class="leftText highlightGreen">Blacksmith 2</td>
    <td>4-7</td>
  </tr>
  <tr>
    <td class="leftText highlightGreen">Koharu</td>
    <td>1-7</td>
    <td class="leftText highlightGreen">Peddler</td>
    <td>4-7</td>
  </tr>
  <tr>
    <td class="leftText highlightGreen">Sage 1</td>
    <td>1-7</td>
    <td class="leftText highlightGreen">Chiroro</td>
    <td>4-7</td>
  </tr>
  <tr>
    <td class="leftText highlightGreen">Sparrow</td>
    <td>1-7</td>
    <td class="leftText highlightGreen">Mekky</td>
    <td>4-7</td>
  </tr>
  <tr>
    <td class="leftText highlightGreen">Gachagacha</td>
    <td>1-7</td>
    <td class="leftText highlightGreen">Digger Don</td>
    <td>5-7</td>
  </tr>
  <tr>
    <td class="leftText highlightGreen">Tradesman</td>
    <td>1-7</td>
    <td colspan="2" class="highlightGray"></td>
  </tr>
</table>
