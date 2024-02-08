var talents = [
	{
		n: 'Holy',
		t: [
			{
				i: 124,
				n: 'Divine Strength',
				m: 5,
				s: [
					20262,
					20263,
					20264,
					20265,
					20266
				],
				d: [],
				x: 1,
				y: 0,
				iconname: 'ability_golemthunderclap',
				c: 0,
				aura: function (count) { return { strengthmod: 2 * count } },
			},
			{
				i: 130,
				n: 'Divine Intellect',
				m: 5,
				s: [
					20257,
					20258,
					20259,
					20260,
					20261
				],
				d: [],
				x: 2,
				y: 0,
				c: 0,
				iconname: 'spell_nature_sleep',
				aura: function (count) { return { intellectmod: 2 * count } },
			},
			{
				i: 127,
				n: 'Spiritual Focus',
				m: 5,
				s: [
					20205,
					20206,
					20207,
					20209,
					20208
				],
				d: [],
				x: 1,
				y: 1,
				c: 0,
				iconname: 'spell_arcane_blink',
				aura: function (count) { return { spiritual_focus: count * 14 } },
			},
			{
				i: 126,
				n: 'Improved Seal of Righteousness',
				m: 5,
				s: [
					20224,
					20225,
					20330,
					20331,
					20332
				],
				d: [],
				x: 2,
				y: 1,
				c: 0,
				iconname: 'ability_thunderbolt',
				aura: function (count) { return { imp_sor: count * 3 } },
			},
			{
				i: 641,
				n: 'Healing Light',
				m: 3,
				s: [
					20237,
					20238,
					20239
				],
				d: [],
				x: 0,
				y: 2,
				c: 0,
				iconname: 'spell_holy_holybolt',
				aura: function (count) { return { healing_light: count * 4 } },
			},
			{
				i: 128,
				n: 'Consecration',
				m: 1,
				s: [
					26573
				],
				d: [],
				x: 1,
				y: 2,
				c: 0,
				iconname: 'spell_holy_innerfire',
				aura: function (count) { return { consecration: count } },
			},
			{
				i: 131,
				n: 'Improved Lay on Hands',
				m: 2,
				s: [
					20234,
					20235
				],
				d: [],
				x: 2,
				y: 2,
				c: 0,
				iconname: 'spell_holy_layonhands',
				aura: function (count) { return { imp_loh: count } },
			},
			{
				i: 137,
				n: 'Unyielding Faith',
				m: 2,
				s: [
					9453,
					25836
				],
				d: [],
				x: 3,
				y: 2,
				c: 0,
				iconname: 'spell_holy_unyieldingfaith',
				aura: function (count) { return { unyielding_faith: count * 5 } },
			},
			{
				i: 121,
				n: 'Illumination',
				m: 5,
				s: [
					20210,
					20212,
					20213,
					20214,
					20215
				],
				d: [],
				x: 1,
				y: 3,
				c: 0,
				iconname: 'spell_holy_greaterheal',
				aura: function (count) { return { illumination: count * 20 } },
			},
			{
				i: 136,
				n: 'Improved Blessing of Wisdom',
				m: 2,
				s: [
					20244,
					20245,
				],
				d: [],
				x: 2,
				y: 3,
				c: 0,
				iconname: 'spell_holy_sealofwisdom',
				aura: function (count) { return { imp_bow: count * 10 } },
			},
			{
				i: 662,
				n: 'Divine Favor',
				m: 1,
				s: [
					20216
				],
				d: [],
				x: 1,
				y: 4,
				r: [
					8,
					5
				],
				c: 0,
				iconname: 'spell_holy_heal',
				aura: function (count) { return { divine_favor: count } },
			},
			{
				i: 132,
				n: 'Lasting Judgement',
				m: 3,
				s: [
					20359,
					20360,
					20361,
				],
				d: [],
				x: 2,
				y: 4,
				c: 0,
				iconname: 'spell_holy_healingaura',
				aura: function (count) { return { lasting_judgement: count * 10 } },
			},
			{
				i: 133,
				n: 'Holy Power',
				m: 5,
				s: [
					5923,
					5924,
					5925,
					5926,
					25829
				],
				d: [],
				x: 2,
				y: 5,
				c: 0,
				iconname: 'spell_holy_power',
				aura: function (count) { return { holy_power: count } },
			},
			{
				i: 125,
				n: 'Holy Shock',
				m: 1,
				s: [
					20473
				],
				d: [],
				x: 1,
				y: 6,
				r: [
					10,
					1
				],
				c: 0,
				iconname: 'spell_holy_searinglight',
				aura: function (count) { return { holy_shock: count } },
			}
		]
	},
	{
		n: 'Protection',
		t: [
			{
				i: 158,
				n: 'Improved Devotion Aura',
				m: 5,
				s: [
					20138,
					20139,
					20140,
					20141,
					20142
				],
				d: [],
				x: 1,
				y: 0,
				c: 0,
				iconname: 'spell_holy_devotionaura',
				aura: function (count) { return { imp_devo: count * 5 } },
			},
			{
				i: 157,
				n: 'Redoubt',
				m: 5,
				s: [
					20127,
					20130,
					20135,
					20136,
					20137
				],
				d: [],
				x: 2,
				y: 0,
				c: 0,
				iconname: 'ability_defend',
				aura: function (count) { return { redoubt: count * 6 } }
			},
			{
				i: 161,
				n: 'Precision',
				m: 3,
				s: [
					20189,
					20192,
					20193
				],
				d: [],
				x: 0,
				y: 1,
				c: 0,
				iconname: 'ability_rogue_ambush',
				aura: function (count) { return { precision: count } },
			},
			{
				i: 159,
				n: 'Guardians Favor',
				m: 2,
				s: [
					20174,
					20175
				],
				d: [],
				x: 1,
				y: 1,
				c: 0,
				iconname: 'spell_holy_sealofprotection',
				aura: function (count) { return { guardians_favor: count } },
			},
			{
				i: 166,
				n: 'Toughness',
				m: 5,
				s: [
					20143,
					20144,
					20145,
					20146,
					20147
				],
				d: [],
				x: 3,
				y: 1,
				c: 0,
				iconname: 'spell_holy_devotion',
				aura: function (count) { return { cleavebonus: count * 2 } },
			},
			{
				i: 661,
				n: 'Blessing of Kings',
				m: 1,
				s: [
					20217
				],
				d: [],
				x: 0,
				y: 2,
				c: 0,
				iconname: 'spell_magic_magearmor',
				aura: function (count) { return { bok: count } },
			},
			{
				i: 154,
				n: 'Improved Righteous Fury',
				m: 3,
				s: [
					20468,
					20469,
					20470
				],
				d: [],
				x: 1,
				y: 2,
				c: 0,
				iconname: 'spell_holy_sealoffury',
				aura: function (count) { return { imp_rf: count } },
			},
			{
				i: 1581,
				n: 'Shield Specialization',
				m: 3,
				s: [
					20148,
					20149,
					20150
				],
				d: [],
				x: 2,
				y: 2,
				r: [
					1,
					5
				],
				c: 0,
				iconname: 'inv_shield_06',
				aura: function (count) { return { shield_specialisation: count * 10 } },
			},
			{
				i: 1582,
				n: 'Anticipation',
				m: 5,
				s: [
					20096,
					20097,
					20098,
					20099,
					20100
				],
				d: [],
				x: 3,
				y: 2,
				c: 0,
				iconname: 'spell_magic_lesserinvisibilty',
				aura: function (count) { return { defense: count * 2 } },
			},
			{
				i: 1542,
				n: 'Improved Hammer of Justice',
				m: 3,
				s: [
					20487,
					20488,
					20489
				],
				d: [],
				x: 1,
				y: 3,
				c: 0,
				iconname: 'spell_holy_sealofmight',
				aura: function (count) { return { imp_hoj: count * 5 } },
			},
			{
				i: 155,
				n: 'Improved Concentration Aura',
				m: 3,
				s: [
					20254,
					20255,
					20256
				],
				d: [],
				x: 2,
				y: 3,
				c: 0,
				iconname: 'spell_holy_mindsooth',
				aura: function (count) { return { enrage: count * 5 } },
			},
			{
				i: 168,
				n: 'Blessing of Sanctuary',
				m: 1,
				s: [
					20911
				],
				d: [],
				x: 1,
				y: 4,
				c: 0,
				iconname: 'spell_nature_lightningshield',
				aura: function (count) { return { bosanc: count } },
			},
			{
				i: 165,
				n: 'Reckoning',
				m: 5,
				s: [
					20177,
					20179,
					20181,
					20180,
					20182,
				],
				d: [],
				x: 2,
				y: 4,
				c: 0,
				iconname: 'spell_holy_blessingofstrength',
				aura: function (count) { return { reckoning: count * 20 } },
			},
			{
				i: 1543,
				n: 'One-Handed Weapon Specialization',
				m: 5,
				s: [
					20196,
					20197,
					20198,
					20199,
					20200
				],
				d: [],
				x: 2,
				y: 5,
				c: 0,
				iconname: 'inv_sword_20',
				aura: function (count) { return { ohspec: count * 2 } },
			},
			{
				i: 1541,
				n: 'Holy Shield',
				m: 1,
				s: [
					20925
				],
				d: [],
				x: 1,
				y: 6,
				r: [
					11,
					1
				],
				c: 0,
				iconname: 'classic_spell_holy_blessingofprotection',
				aura: function (count) { return { holyshield: count } },
			}
		]
	},
	{
		n: 'Retribution',
		t: [
			{
				i: 1601,
				n: 'Improved Blessing of Might',
				m: 5,
				s: [
					20042,
					20045,
					20046,
					20047,
					20048
				],
				d: [],
				x: 1,
				y: 0,
				c: 0,
				iconname: 'spell_holy_fistofjustice',
				aura: function (count) { return { imp_bom: count * 4 } },
			},
			{
				i: 138,
				n: 'Benediction',
				m: 5,
				s: [
					20101,
					20102,
					20103,
					20104,
					20105
				],
				d: [],
				x: 2,
				y: 0,
				c: 0,
				iconname: 'spell_frost_windwalkon',
				aura: function (count) { return { benediction: count * 3 } },
			},
			{
				i: 142,
				n: 'Improved Judgement',
				m: 2,
				s: [
					25956,
					25957
				],
				d: [],
				x: 0,
				y: 1,
				c: 0,
				iconname: 'spell_holy_righteousfury',
				aura: function (count) { return { imp_judge: count } },
			},
			{
				i: 140,
				n: 'Improved Seal of the Crusader',
				m: 3,
				s: [
					20335,
					20336,
					20337
				],
				d: [],
				x: 1,
				y: 1,
				c: 0,
				iconname: 'spell_holy_holysmite',
				aura: function (count) { return { armormod: count * 2 } },
			},
			{
				i: 141,
				n: 'Deflection',
				m: 5,
				s: [
					20060,
					20061,
					20062,
					20063,
					20064
				],
				d: [],
				x: 2,
				y: 1,
				c: 0,
				iconname: 'ability_parry',
				aura: function (count) { return { deflection: count } },
			},
			{
				i: 153,
				n: 'Vindication',
				m: 3,
				s: [
					9452,
					26016,
					26021
				],
				d: [],
				x: 0,
				y: 2,
				c: 0,
				iconname: 'spell_holy_vindication',
				aura: function (count) { return { vindication: count } },
			},
			{
				i: 145,
				n: 'Conviction',
				m: 5,
				s: [
					20117,
					20118,
					20119,
					20120,
					20121
				],
				d: [],
				x: 1,
				y: 2,
				c: 0,
				iconname: 'spell_holy_retributionaura',
				aura: function (count) { return { conviction: count } },
			},
			{
				i: 147,
				n: 'Seal of Command',
				m: 1,
				s: [
					20375
				],
				d: [],
				x: 2,
				y: 2,
				c: 0,
				iconname: 'ability_warrior_innerrage',
				aura: function (count) { return { soc: count } },
			},
			{
				i: 144,
				n: 'Pursuit of Justice',
				m: 2,
				s: [
					26022,
					26023
				],
				d: [],
				x: 3,
				y: 2,
				c: 0,
				iconname: 'spell_holy_persuitofjustice',
				aura: function (count) { return { poj: count } },
			},
			{
				i: 146,
				n: 'Eye for an Eye',
				m: 2,
				s: [
					9799,
					9799
				],
				d: [],
				x: 0,
				y: 3,
				c: 0,
				iconname: 'spell_holy_eyeforaneye',
				aura: function (count) { return { eyeforeye: count } },
			},
			{
				i: 151,
				n: 'Improved Retribution Aura',
				m: 2,
				s: [
					20091,
					20092
				],
				d: [],
				x: 2,
				y: 3,
				c: 0,
				iconname: 'spell_holy_auraoflight',
				aura: function (count) { return { imp_retrib: count } },
			},
			{
				i: 143,
				n: 'Two-Handed Weapon Specializationt',
				m: 3,
				s: [
					20111,
					20112,
					20113
				],
				d: [],
				x: 0,
				y: 4,
				c: 0,
				iconname: 'inv_hammer_04',
				aura: function (count) { return { th_spec: count } },
			},
			{
				i: 150,
				n: 'Sanctity Aura',
				m: 1,
				s: [
					20218
				],
				d: [],
				x: 2,
				y: 4,
				c: 0,
				iconname: 'spell_holy_mindvision',
				aura: function (count) { return { sanc_aura: count } },
			},
			{
				i: 152,
				n: 'Vengeance',
				m: 5,
				s: [
					20049,
					20056,
					20057,
					20058,
					20059
				],
				d: [],
				x: 1,
				y: 5,
				r: [
					6,
					5
				],
				c: 0,
				iconname: 'ability_racial_avatar',
				aura: function (count) { return { vengeance: count } },
			},
			{
				i: 149,
				n: 'Repentance',
				m: 1,
				s: [
					20066
				],
				d: [],
				x: 1,
				y: 6,
				c: 0,
				iconname: 'spell_holy_prayerofhealing',
				aura: function (count) { return { repentance: count } },
			}
		]
	}
];