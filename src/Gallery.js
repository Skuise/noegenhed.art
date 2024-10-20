import React, { useState, useEffect } from 'react';
import './Gallery.css';

const XMarkIcon = () => <span>×</span>;

// Gallery images data
const galleryImages = [
  { id: 1, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/2020 commission nsfw vinny bug fuck 1.png', tags: ['Sketch', 'Teratophilia'], nsfw: true },
  { id: 2, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/April 2022 sketchbook my art Red commission cuddle.png', tags: ['Sketch'], nsfw: true },
  { id: 3, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/april sketchbook 2023 my art arcadensfw commission messy.png', tags: ['Sketch', 'Parasitism'], nsfw: true },
  { id: 4, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/april sketchbook 2023 my art Brooke Bacea 2.png', tags: ['Sketch', 'Lactation'], nsfw: true },
  { id: 5, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/april sketchbook 2023 my art wolfizen commission.png', tags: ['Sketch', 'Transformation', '💄'], nsfw: true },
  { id: 6, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/August sketchbook 2023 my art Kane commission 2.png', tags: ['Sketch'], nsfw: true },
  { id: 7, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/August sketchbook 2023 my art Lycandope goat lady commission.png', tags: ['Sketch'], nsfw: true },
  { id: 8, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/bird worms guide thing--.png', tags: ['Sketch'], nsfw: true },
  { id: 9, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/Brooke bultund trainer commission.png', tags: ['Sketch', 'Transformation', '💄'], nsfw: true },
  { id: 10, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/December sketchbook 2021 myart BROOKE BIRTHDAY .png', tags: ['Sketch', 'Lactation'], nsfw: true },
  { id: 11, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/December sketchbook 2022 my art gentle january patreon commission.png', tags: ['Sketch'], nsfw: true },
  { id: 12, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/December sketchbook 2022 my art lycandope jan patreon commission.png', tags: ['Sketch', 'Transformation', '💄'], nsfw: true },
  { id: 13, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/December sketchbook 2022 my art lycandope patreon commission.png', tags: ['Sketch', 'Transformation'], nsfw: true },
  { id: 14, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/December sketchbook 2022 my art telv.png', tags: ['Sketch'], nsfw: true },
  { id: 15, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/February Sketchbook 2023 my art Lycandope birthday.png', tags: ['Sketch'], nsfw: true },
  { id: 16, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/February Sketchbook 2023 my art lycandope rat lady.png', tags: ['Sketch', 'Transformation'], nsfw: true },
  { id: 17, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/February Sketchbook 2023 my art redthedragon commission 1.png', tags: ['Sketch'], nsfw: true },
  { id: 18, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/February Sketchbook 2023 my art tjdev4stat0r march patreon commission.png', tags: ['Sketch', 'Transformation'], nsfw: true },
  { id: 19, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/February sketchbook 2024 Brooke BJ commission.png', tags: ['Sketch'], nsfw: true },
  { id: 20, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/February sketchbook 2024 Brooke Ivy Flora commission.png', tags: ['Sketch'], nsfw: true },
  { id: 21, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/January sketchbook 2021 Brooke Danni and PIke commission.png', tags: ['Sketch'], nsfw: true },
  { id: 22, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/January sketchbook 2021 commission Brooke Jordy knot.png', tags: ['Sketch', 'Transformation', '💄'], nsfw: true },
  { id: 23, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/January sketchbook 2022 my art brooke dont speak.png', tags: ['Sketch', 'Transformation'], nsfw: true },
  { id: 24, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/July Sketchbook 2022 my art astral commission Astraeus.png', tags: ['Sketch', 'Lactation'], nsfw: true },
  { id: 25, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/July Sketchbook 2022 my art Lycandope Hyena Commission.png', tags: ['Sketch', 'Transformation', 'Lactation', '💄'], nsfw: true },
  { id: 26, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/June sketchbook 2022 my art Bad Dino price.png', tags: ['Sketch'], nsfw: true },
  { id: 27, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/June sketchbook 2022 my art Brooke cow milk reading.png', tags: ['Sketch', 'Lactation'], nsfw: true },
  { id: 28, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/June sketchbook 2022 my art Purple Slutsky commission.png', tags: ['Sketch', 'Oviposition', 'Transformation'], nsfw: true },
  { id: 29, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/June sketchbook 2022 my art space gays elegance 3.png', tags: ['Sketch'], nsfw: true },
  { id: 30, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/June Sketchbook 2023 my art Brooke eat out cow milk.png', tags: ['Sketch', 'Lactation'], nsfw: true },
  { id: 31, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/June Sketchbook 2023 my art Brooke eat out cow.png', tags: ['Sketch'], nsfw: true },
  { id: 32, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/June Sketchbook 2023 my art Lycandope commission alt 2.png', tags: ['Sketch', 'Transformation'], nsfw: true },
  { id: 33, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/June Sketchbook 2023 my art Lycandope cute.png', tags: ['Sketch'], nsfw: false },
  { id: 34, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/June Sketchbook 2023 my art Lycandope gift art.png', tags: ['Sketch'], nsfw: true },
  { id: 35, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/May 2022 sketchbook my art space gays came in power generaotr freyr.png', tags: ['Sketch'], nsfw: false },
  { id: 36, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/My art dino lady.jpeg', tags: ['Sketch', 'Oviposition', 'Transformation'], nsfw: true },
  { id: 37, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/My art Gentle Kylie getting railed.jpeg', tags: ['Sketch', 'Teratophilia'], nsfw: true },
  { id: 38, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/My art lycandope commission dino lady.jpeg', tags: ['Sketch', 'Oviposition', 'Transformation'], nsfw: true },
  { id: 39, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/my art nsfw tf milk.jpeg', tags: ['Sketch', 'Transformation', 'Lactation'], nsfw: true },
  { id: 40, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/myart 2020 chimera transformation nsfw 2.jpeg', tags: ['Sketch', 'Transformation', 'Lactation', '💄'], nsfw: true },
  { id: 41, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/October sketchbook 2020 Freyr space gays tentacles.png', tags: ['Sketch', 'Parasitism'], nsfw: true },
  { id: 42, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/October sketchbook 2022 my art lycan patreon request harpy.png', tags: ['Sketch', 'Teratophilia'], nsfw: true },
  { id: 43, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/October sketchbook 2022 my art transmasculinepreg commission.png', tags: ['Sketch'], nsfw: true },
  { id: 44, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/Screenshot 2023-09-04 at 17.06.37.png', tags: ['Sketch'], nsfw: false },
  { id: 45, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/Screenshot 2023-09-04 at 19.15.19.png', tags: ['Sketch'], nsfw: false },
  { id: 46, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/Screenshot 2023-09-04 at 20.11.34.png', tags: ['Sketch'], nsfw: false },
  { id: 47, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/Screenshot 2024-03-28 at 20.06.02.png', tags: ['Sketch'], nsfw: false },
  { id: 48, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/Screenshot 2024-04-17 at 02.46.22.png', tags: ['Sketch'], nsfw: false },
  { id: 49, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/Screenshot 2024-04-18 at 07.33.20.png', tags: ['Sketch'], nsfw: false },
  { id: 50, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/Screenshot 2024-04-30 at 10.06.36.png', tags: ['Sketch'], nsfw: false },
  { id: 51, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/Screenshot 2024-05-14 at 02.50.45.png', tags: ['Sketch'], nsfw: false },
  { id: 52, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/Screenshot 2024-05-14 at 11.54.05.png', tags: ['Sketch', 'Transformation', 'Merging'], nsfw: true },
  { id: 53, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/Screenshot 2024-05-14 at 12.40.24.png', tags: ['Sketch', 'Transformation', 'Merging'], nsfw: true },
  { id: 54, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/Screenshot 2024-06-16 at 02.55.46.png', tags: ['Sketch'], nsfw: false },
  { id: 55, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/Screenshot 2024-07-08 at 03.10.50.png', tags: ['Sketch'], nsfw: false },
  { id: 56, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/Screenshot 2024-07-29 at 07.17.44.png', tags: ['Sketch'], nsfw: false },
  { id: 57, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/Screenshot 2024-08-31 at 22.13.08.png', tags: ['Sketch', '💄'], nsfw: true },
  { id: 58, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/Screenshot 2024-09-17 at 10.51.55.png', tags: ['Sketch'], nsfw: false },
  { id: 59, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/Screenshot 2024-09-27 at 22.37.22.png', tags: ['Sketch'], nsfw: true },
  { id: 60, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/Screenshot 2024-10-01 at 05.42.42.png', tags: ['Sketch'], nsfw: false },
  { id: 61, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/September Sketchbook 2021 Brooke cow milk 2.png', tags: ['Sketch', 'Lactation'], nsfw: true },
  { id: 62, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/September Sketchbook 2021 space gays dive in.png', tags: ['Sketch', 'Teratophilia'], nsfw: true },
  { id: 63, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/sex-med kit 2023 space gays 2.png', tags: ['Sketch', 'Parasitism'], nsfw: true },
  { id: 64, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/sketchbook my art leopard seal 1.png', tags: ['Sketch'], nsfw: false },
  { id: 65, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/space gays Freyr bucko.png', tags: ['Sketch'], nsfw: true },
  { id: 66, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/space gays freyr fuckin lil tentas 2.png', tags: ['Sketch', 'Lactation'], nsfw: true },
  { id: 67, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/space gays freyr hyper clit.png', tags: ['Sketch'], nsfw: true },
  { id: 68, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/space gays freyr long clit.png', tags: ['Sketch'], nsfw: true },
  { id: 69, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/space gays freyr relaxxx.jpeg', tags: ['Sketch'], nsfw: true },
  { id: 70, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/space gays freyr tongue.png', tags: ['Sketch', 'Parasitism'], nsfw: true },
  { id: 71, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/space gays Freyr top off.jpeg', tags: ['Sketch', 'Teratophilia'], nsfw: true },
  { id: 72, src: 'https://noegenhed.s3.amazonaws.com/art/Sketches/space gays Freyr up to shenanigans.jpeg', tags: ['Sketch'], nsfw: false },
  { id: 73, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/april sketchbook 2023 my art Gentle snake parasites commission.png', tags: ['Coloured Sketch', 'Parasitism'], nsfw: true },
  { id: 74, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/april sketchbook 2023 my art Lycandope Telv payback commission.png', tags: ['Coloured Sketch'], nsfw: true },
  { id: 75, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/april sketchbook 2023 my art purple slutsky commission.png', tags: ['Coloured Sketch', 'Transformation'], nsfw: true },
  { id: 76, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/april sketchbook 2023 my art telv lycandope commission.png', tags: ['Coloured Sketch', 'Transformation', '💄'], nsfw: true },
  { id: 77, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/Astral commission aug cropped.png', tags: ['Coloured Sketch'], nsfw: true },
  { id: 78, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/August Sketchbook 2022 my art eggpopsicles pantherwolf copy.png', tags: ['Coloured Sketch', '💄'], nsfw: true },
  { id: 79, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/August Sketchbook 2022 my art eggpopsicles unicorn dragon w dick.png', tags: ['Coloured Sketch'], nsfw: true },
  { id: 80, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/August Sketchbook 2022 my art sona bug tail no leak.png', tags: ['Coloured Sketch', 'Transformation', 'Parasitism'], nsfw: true },
  { id: 81, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/August sketchbook 2023 my art Brooke redraw 2.png', tags: ['Coloured Sketch'], nsfw: false },
  { id: 82, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/August sketchbook 2023 my art Brooke Siobhan commission.png', tags: ['Coloured Sketch', 'Reference'], nsfw: true },
  { id: 83, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/August sketchbook 2023 my art Kane commission.png', tags: ['Coloured Sketch'], nsfw: true },
  { id: 84, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/Brooke journeyman commission.png', tags: ['Coloured Sketch'], nsfw: true },
  { id: 85, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/December sketchbook 2022 my art CriticalDumpst1 giveaway.png', tags: ['Coloured Sketch', 'Teratophilia'], nsfw: true },
  { id: 86, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/December sketchbook 2022 my art vinny centaur redraw.png', tags: ['Coloured Sketch'], nsfw: false },
  { id: 87, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/December sketchbook 2023 my art beeg demon husky flats.png', tags: ['Coloured Sketch'], nsfw: false },
  { id: 88, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/December sketchbook 2023 my art Brooke pet commission copy.png', tags: ['Coloured Sketch', 'Transformation'], nsfw: true },
  { id: 89, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/December sketchbook 2023 my art Katja hehehe.png', tags: ['Coloured Sketch'], nsfw: false },
  { id: 90, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/February Sketchbook 2023 my art redhmenace horse guy patreon commission no palette.png', tags: ['Coloured Sketch', 'Reference', '💄'], nsfw: true },
  { id: 91, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/February Sketchbook 2023 my art redhmenace shark.png', tags: ['Coloured Sketch'], nsfw: true },
  { id: 92, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/February sketchbook 2024 Brooke Doug handjob.png', tags: ['Coloured Sketch'], nsfw: true },
  { id: 93, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/February sketchbook 2024 Pike Katja sex roulette commission Brooke.png', tags: ['Coloured Sketch', '💄'], nsfw: true },
  { id: 94, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/January sketchbook 2022 my art gentle honey.png', tags: ['Coloured Sketch', 'Transformation', 'Lactation'], nsfw: true },
  { id: 95, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/July Sketchbook 2022 my art Boiler commission jackalpaca preg.png', tags: ['Coloured Sketch'], nsfw: true },
  { id: 96, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/July Sketchbook 2022 my art border collie ref.png', tags: ['Coloured Sketch', 'Reference'], nsfw: false },
  { id: 97, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/July Sketchbook 2022 my art eggpopsicles design 1.png', tags: ['Coloured Sketch', 'Reference'], nsfw: true },
  { id: 98, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/July Sketchbook 2022 my art Gentle commission Kylie and her husbands.png', tags: ['Coloured Sketch'], nsfw: true },
  { id: 99, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/June Sketchbook 2023 my art Brooke Niels Kuzih commission less cum.png', tags: ['Coloured Sketch'], nsfw: true },
  { id: 100, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/June Sketchbook 2023 my art flowerhead 2.png', tags: ['Coloured Sketch', '💄'], nsfw: false },
  { id: 101, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/March 2022 sketchbook my art xloaca comm .png', tags: ['Coloured Sketch', 'Lactation', 'Oviposition'], nsfw: true },
  { id: 102, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/May 2022 sketchbook my art cow breed 1.png', tags: ['Coloured Sketch', 'Transformation', '💄'], nsfw: true },
  { id: 103, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/my art gentle chimera.png', tags: ['Coloured Sketch'], nsfw: true },
  { id: 104, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/myart 2020 lactation cow yeehaw nsfw.png', tags: ['Coloured Sketch', 'Lactation'], nsfw: true },
  { id: 105, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/Noegenhed october sketchbook 2024 Gentle Abraham commission tits.png', tags: ['Coloured Sketch', 'Reference'], nsfw: true },
  { id: 106, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/Noegenhed october sketchbook 2024 gentle aura commission dick.png', tags: ['Coloured Sketch', 'Reference'], nsfw: true },
  { id: 107, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/Noegenhed september sketchbook 2024 Brooke hogsona in the park commission.png', tags: ['Coloured Sketch', 'Oviposition', '💄'], nsfw: true },
  { id: 108, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/Noegenhed september sketchbook 2024 Gentle goop wyvern 1.png', tags: ['Coloured Sketch', 'Reference', '💄'], nsfw: false },
  { id: 109, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/Noegenhed september sketchbook 2024 Gentle sphinx Elias commission.png', tags: ['Coloured Sketch', 'Teratophilia'], nsfw: true },
  { id: 110, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/Noegenhed september sketchbook 2024 Kane undress.png', tags: ['Coloured Sketch'], nsfw: true },
  { id: 111, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/Noegenhed september sketchbook 2024 Nerius cheetah commission colours.png', tags: ['Coloured Sketch', 'Transformation', 'Lactation'], nsfw: true },
  { id: 112, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/Noegenhed september sketchbook 2024 yari milk colours.png', tags: ['Coloured Sketch', 'Lactation'], nsfw: true },
  { id: 113, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/nuke commission.png', tags: ['Coloured Sketch'], nsfw: true },
  { id: 114, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/October sketchbook 2022 my art CloudyOriginal werewolf comm coloured 2.png', tags: ['Coloured Sketch', 'Lactation'], nsfw: true },
  { id: 115, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/October sketchbook 2022 my art eggpopsicles mint choc leopard design.png', tags: ['Coloured Sketch', 'Reference'], nsfw: true },
  { id: 116, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/Screenshot 2023-12-12 at 03.19.23.png', tags: ['Coloured Sketch'], nsfw: false },
  { id: 117, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/Screenshot 2024-01-07 at 00.08.18.png', tags: ['Coloured Sketch'], nsfw: false },
  { id: 118, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/Screenshot 2024-05-14 at 14.57.31.png', tags: ['Coloured Sketch', 'Transformation', 'Merging'], nsfw: true },
  { id: 119, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/Screenshot 2024-08-24 at 14.40.09.png', tags: ['Coloured Sketch', 'Parasitism'], nsfw: true },
  { id: 120, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/Screenshot 2024-09-11 at 03.45.04.png', tags: ['Coloured Sketch', 'Teratophilia', '💄'], nsfw: true },
  { id: 121, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/Screenshot 2024-09-21 at 15.02.51.png', tags: ['Coloured Sketch', '💄'], nsfw: true },
  { id: 122, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/September sketchbook 2022 my art husky Spike penis.png', tags: ['Coloured Sketch', 'Reference'], nsfw: true },
  { id: 123, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/space gays 2020 elves 1.png', tags: ['Coloured Sketch', 'Reference'], nsfw: false },
  { id: 124, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/space gays alieb 2.png', tags: ['Coloured Sketch'], nsfw: false },
  { id: 125, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/space gays alieb.png', tags: ['Coloured Sketch'], nsfw: false },
  { id: 126, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/space gays ben in the uhhhh suit.png', tags: ['Coloured Sketch'], nsfw: true },
  { id: 127, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/space gays freyr salesperson.png', tags: ['Coloured Sketch'], nsfw: false },
  { id: 128, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/space gays freyr sneer.png', tags: ['Coloured Sketch'], nsfw: false },
  { id: 129, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/space gays shopkeep 2.png', tags: ['Coloured Sketch', 'Reference'], nsfw: false },
  { id: 130, src: 'https://noegenhed.s3.amazonaws.com/art/Coloured Sketches/space gays shopkeep.png', tags: ['Coloured Sketch'], nsfw: false },
  { id: 131, src: 'https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/antstump.png', tags: ['Illustration', '💄'], nsfw: false },
  { id: 132, src: 'https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/April sketchbook 2021 lycandoe commission no watermark copy.png', tags: ['Illustration', 'Transformation', '💄'], nsfw: true },
  { id: 133, src: 'https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/Brooke commission Era_ portrait small.png', tags: ['Illustration'], nsfw: false },
  { id: 134, src: 'https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/brooke cow painting nomyulk.png', tags: ['Illustration'], nsfw: true },
  { id: 135, src: 'https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/CloudyOriginal commission my art.png', tags: ['Illustration', 'Transformation', 'Lactation', '💄'], nsfw: true },
  { id: 136, src: 'https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/December sketchbook 2022 my art space gays ben betty desert cooking.png', tags: ['Illustration'], nsfw: false },
  { id: 137, src: 'https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/December sketchbook 2022 my art space gays ben on betty concept my art.png', tags: ['Illustration'], nsfw: false },
  { id: 138, src: 'https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/February sketchbook 2024 Husky painting noegenhed.png', tags: ['Illustration'], nsfw: true },
  { id: 139, src: 'https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/gentle morgan commission.png', tags: ['Illustration'], nsfw: true },
  { id: 140, src: 'https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/Kane dragon commission my art 2024 done--.png', tags: ['Illustration'], nsfw: false },
  { id: 141, src: 'https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/Klarry beholder my art print 2 single.png', tags: ['Illustration'], nsfw: false },
  { id: 142, src: 'https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/Lycandope wolfizen train commission.png', tags: ['Illustration', '💄'], nsfw: false },
  { id: 143, src: 'https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/March 2022 sketchbook my art brooke cow commission bench ver clit sig.png', tags: ['Illustration', '💄'], nsfw: true },
  { id: 144, src: 'https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/Merv commission final small.png', tags: ['Illustration', 'Teratophilia', 'Transformation', '💄'], nsfw: true },
  { id: 145, src: 'https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/Noegenhed Brooke Heather team building commission sequence.png', tags: ['Illustration', '💄'], nsfw: true },
  { id: 146, src: 'https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/NoegenhedKane astral projection fucking illustration commission thigh glow.png', tags: ['Illustration'], nsfw: true },
  { id: 147, src: 'https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/Roses commission noegenhed.png', tags: ['Illustration'], nsfw: false },
  { id: 148, src: 'https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/September sketchbook 2020 Pris commission slime time 3.png', tags: ['Illustration', 'Teratophilia', 'Transformation', '💄'], nsfw: true },
  { id: 149, src: 'https://noegenhed.s3.amazonaws.com/art/Paintings and Illustrations/Yari painting commission fix.png', tags: ['Illustration'], nsfw: false },
  { id: 150, src: 'https://noegenhed.s3.amazonaws.com/art/Comics and sequences/Brooke bunny girl tf 1.png', tags: ['Comic/Sequence', 'Transformation', '💄'], nsfw: true },
  { id: 151, src: 'https://noegenhed.s3.amazonaws.com/art/Comics and sequences/Brooke bunny girl tf 2.png', tags: ['Comic/Sequence', 'Transformation', '💄'], nsfw: true },
  { id: 152, src: 'https://noegenhed.s3.amazonaws.com/art/Comics and sequences/Brooke cow tf sequence full.png', tags: ['Comic/Sequence', 'Transformation', 'Lactation', '💄'], nsfw: true },
  { id: 153, src: 'https://noegenhed.s3.amazonaws.com/art/Comics and sequences/Brooke Doug too high.png', tags: ['Comic/Sequence'], nsfw: false },
  { id: 154, src: 'https://noegenhed.s3.amazonaws.com/art/Comics and sequences/March 2022 sketchbook my art space gays ben curtaincall meme.png', tags: ['Comic/Sequence'], nsfw: true },
  { id: 155, src: 'https://noegenhed.s3.amazonaws.com/art/Comics and sequences/my art space gays Freyr sounding tight.png', tags: ['Comic/Sequence'], nsfw: true },
  { id: 156, src: 'https://noegenhed.s3.amazonaws.com/art/Comics and sequences/Noegenhed Brooke tattoo sequence commission.png', tags: ['Comic/Sequence', 'Transformation', '💄'], nsfw: true },
  { id: 157, src: 'https://noegenhed.s3.amazonaws.com/art/Comics and sequences/Noegenhed october sketchbook 2024 resave male breast growth sequence.png', tags: ['Comic/Sequence', 'Transformation', 'Lactation'], nsfw: true },
  { id: 158, src: 'https://noegenhed.s3.amazonaws.com/art/Comics and sequences/tjdevastator kaiju progression tf commission my art .png', tags: ['Comic/Sequence', 'Transformation'], nsfw: true },
  { id: 159, src: 'https://noegenhed.s3.amazonaws.com/art/Reference sheets/Brooke auggie ref big.png', tags: ['Reference'], nsfw: true },
  { id: 160, src: 'https://noegenhed.s3.amazonaws.com/art/Reference sheets/Brooke Bacea ref.png', tags: ['Reference', 'Lactation'], nsfw: true },
  { id: 161, src: 'https://noegenhed.s3.amazonaws.com/art/Reference sheets/Brooke cow ref sheet 2023.png', tags: ['Reference'], nsfw: true },
  { id: 162, src: 'https://noegenhed.s3.amazonaws.com/art/Reference sheets/Brooke Era ref sheet small meow small file also.png', tags: ['Reference'], nsfw: true },
  { id: 163, src: 'https://noegenhed.s3.amazonaws.com/art/Reference sheets/Brooke pen ref nsfw.png', tags: ['Reference'], nsfw: true },
  { id: 164, src: 'https://noegenhed.s3.amazonaws.com/art/Reference sheets/Brooke ref Astrid.png', tags: ['Reference'], nsfw: true },
  { id: 165, src: 'https://noegenhed.s3.amazonaws.com/art/Reference sheets/Brooke ref hogsona.png', tags: ['Reference'], nsfw: true },
  { id: 166, src: 'https://noegenhed.s3.amazonaws.com/art/Reference sheets/January sketchbook 2021 Kapros ref sheet space gays.png', tags: ['Reference', '💄'], nsfw: true },
  { id: 167, src: 'https://noegenhed.s3.amazonaws.com/art/Reference sheets/Lycandope werewolf ref sheet my art July 2023 copy.png', tags: ['Reference', 'Transformation', 'Lactation', '💄'], nsfw: true },
  { id: 168, src: 'https://noegenhed.s3.amazonaws.com/art/Reference sheets/March 2022 sketchbook my art husky ref.png', tags: ['Reference'], nsfw: false },
  { id: 169, src: 'https://noegenhed.s3.amazonaws.com/art/Reference sheets/Noegenhed June 2024 – Brooke Katja ref sheet.png', tags: ['Reference', 'Transformation', '💄'], nsfw: true },
];

const allTags = [...new Set(galleryImages.flatMap(img => img.tags))];

const commissionTypes = ['Sketch', 'Coloured Sketch', 'Reference', 'Illustration', 'Comic/Sequence'];
const contentTags = allTags.filter(tag => !commissionTypes.includes(tag));

const Navigation = () => {
  return (
    <nav>
      <div className="main-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/terms">Terms</a></li>
        </ul>
      </div>
    </nav>
  );
};

const Gallery = () => {
  const [selectedCommissionTypes, setSelectedCommissionTypes] = useState([]);
  const [selectedContentTags, setSelectedContentTags] = useState([]);
  const [showNSFW, setShowNSFW] = useState(true);  // Changed to true
  const [selectedImage, setSelectedImage] = useState(null);
  const [displayedImages, setDisplayedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(20);
  const [isLoading, setIsLoading] = useState(false);

  const toggleCommissionType = (type) => {
    setSelectedCommissionTypes(prevTypes =>
      prevTypes.includes(type)
        ? prevTypes.filter(t => t !== type)
        : [...prevTypes, type]
    );
  };

  const toggleContentTag = (tag) => {
    setSelectedContentTags(prevTags =>
      prevTags.includes(tag)
        ? prevTags.filter(t => t !== tag)
        : [...prevTags, tag]
    );
  };

  const filteredImages = galleryImages.filter(img =>
    (selectedCommissionTypes.length === 0 || selectedCommissionTypes.some(type => img.tags.includes(type))) &&
    (selectedContentTags.length === 0 || selectedContentTags.some(tag => img.tags.includes(tag))) &&
    (showNSFW || !img.nsfw)
  );

  useEffect(() => {
    setIsLoading(true);
    setDisplayedImages(filteredImages.slice(0, 20));
    setCurrentIndex(20);
    setIsLoading(false);
  }, [selectedCommissionTypes, selectedContentTags, showNSFW, filteredImages]);

  const loadMoreImages = () => {
    setIsLoading(true);
    const newImages = filteredImages.slice(currentIndex, currentIndex + 20);
    setDisplayedImages(prevImages => [...prevImages, ...newImages]);
    setCurrentIndex(prevIndex => prevIndex + 20);
    setIsLoading(false);
  };

  return (
    <div className="gallery-page">
      <header>
        <img src="/logo-colorized.png" alt="Noegenhed Logo" className="logo" />
        <Navigation />
      </header>
      <div className="gallery-content">
        <h1>Gallery</h1>
        <div className="gallery-controls">
          <div className="filter-section">
            <h3>Commission Type:</h3>
            <div className="tag-filters">
              {commissionTypes.map(type => (
                <button
                  key={type}
                  onClick={() => toggleCommissionType(type)}
                  className={selectedCommissionTypes.includes(type) ? 'active' : ''}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          <div className="filter-section">
            <h3>Content Tag:</h3>
            <div className="tag-filters">
              {contentTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleContentTag(tag)}
                  className={selectedContentTags.includes(tag) ? 'active' : ''}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="nsfw-toggle">
            <span>SFW</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={showNSFW}
                onChange={() => setShowNSFW(!showNSFW)}
              />
              <span className="slider round"></span>
            </label>
            <span>NSFW</span>
          </div>
        </div>
        <div className="gallery-grid">
          {displayedImages.map(img => (
            <div 
              key={img.id} 
              className={`gallery-item ${img.nsfw && !showNSFW ? 'nsfw-blur' : ''}`}
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img.src} 
                alt={`${img.tags.join(', ')} - ${img.nsfw ? 'NSFW' : 'SFW'}`} 
                loading="lazy" 
              />
              <div className="image-tags">
                {img.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
        {isLoading && <div className="loading">Loading...</div>}
        {!isLoading && displayedImages.length < filteredImages.length && (
          <div className="load-more-container">
            <button className="load-more-button" onClick={loadMoreImages}>
              Load More
            </button>
          </div>
        )}
      </div>
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedImage(null)}>
              <XMarkIcon />
            </button>
            <img 
              src={selectedImage.src} 
              alt={`Full size: ${selectedImage.tags.join(', ')} - ${selectedImage.nsfw ? 'NSFW' : 'SFW'}`} 
              className="full-size-image" 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
