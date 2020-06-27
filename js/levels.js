var levels = {

Landsknecht: {
        NoviceSwordsman: { 
                1: "20% damage increase, +10 accuracy",
        },
        
        SonicRaid: { 
                1: "TP 4: 130% Damage",
                2: "TP 4: 135% Damage",
                3: "TP 4: 140% Damage",
                4: "TP 4: 145% Damage",
                5: "TP 5: 160% Damage",
                6: "TP 5: 163% Damage",
                7: "TP 5: 166% Damage",
                8: "TP 5: 169% Damage",
                9: "TP 5: 172% Damage",
                10: "TP 6: 180% Damage",
        },
        
        FlameLink: {
                1: "TP 6: 115% Damage, 40% Follow-up multiplier, 46% Follow-up damage",
                2: "TP 6: 120% Damage, 40% Follow-up multiplier, 48% Follow-up damage",
                3: "TP 6: 124% Damage, 40% Follow-up multiplier, 49% Follow-up damage",
                4: "TP 6: 127% Damage, 40% Follow-up multiplier, 50% Follow-up damage",
                5: "TP 8: 130% Damage, 45% Follow-up multiplier, 58% Follow-up damage",
                6: "TP 8: 132% Damage, 45% Follow-up multiplier, 59% Follow-up damage",
                7: "TP 8: 134% Damage, 45% Follow-up multiplier, 59% Follow-up damage",
                8: "TP 8: 136% Damage, 45% Follow-up multiplier, 61% Follow-up damage",
                9: "TP 8: 138% Damage, 45% Follow-up multiplier, 62% Follow-up damage",
                10: "TP 10: 140% Damage, 50% Follow-up multiplier, 70% Follow-up damage",
        },
        
        FreezeLink: {
                1: "TP 6: 115% Damage, 40% Damage Follow-up",
                2: "TP 6: 120% Damage, 40% Damage Follow-up",
                3: "TP 6: 124% Damage, 40% Damage Follow-up",
                4: "TP 6: 127% Damage, 40% Damage Follow-up",
                5: "TP 8: 130% Damage, 45% Damage Follow-up",
                6: "TP 8: 132% Damage, 45% Damage Follow-up",
                7: "TP 8: 134% Damage, 45% Damage Follow-up",
                8: "TP 8: 136% Damage, 45% Damage Follow-up",
                9: "TP 8: 138% Damage, 45% Damage Follow-up",
                10: "TP 10: 140% Damage, 50% Damage Follow-up",
        },
        
        ThunderLink: {
                1: "TP 6: 115% Damage, 40% Damage Follow-up",
                2: "TP 6: 120% Damage, 40% Damage Follow-up",
                3: "TP 6: 124% Damage, 40% Damage Follow-up",
                4: "TP 6: 127% Damage, 40% Damage Follow-up",
                5: "TP 8: 130% Damage, 45% Damage Follow-up",
                6: "TP 8: 132% Damage, 45% Damage Follow-up",
                7: "TP 8: 134% Damage, 45% Damage Follow-up",
                8: "TP 8: 136% Damage, 45% Damage Follow-up",
                9: "TP 8: 138% Damage, 45% Damage Follow-up",
                10: "TP 10: 140% Damage, 50% Damage Follow-up",
        },
        
        PowerBreak: { 
                1: "TP 4: This attack deals 80% damage, Enemy's physical damage dealt reduced to 85%",
                2: "TP 4: This attack deals 83% damage, Enemy's physical damage dealt reduced to 83%",
                3: "TP 5: This attack deals 90% damage, Enemy's physical damage dealt reduced to 79%",
                4: "TP 5: This attack deals 95% damage, Enemy's physical damage dealt reduced to 79%",
                5: "TP 5: This attack deals 100% damage, Enemy's physical damage dealt reduced to 78%",
                6: "TP 6: This attack deals 110% damage, Enemy's physical damage dealt reduced to 75%"
        },
        
        MindBreak: {
                1: "TP 4: This attack deals 80% damage, Enemy's magical damage dealt reduced to 85%",
                2: "TP 4: This attack deals 83% damage, Enemy's magical damage dealt reduced to 83%",
                3: "TP 5: This attack deals 90% damage, Enemy's magical damage dealt reduced to 79%",
                4: "TP 5: This attack deals 95% damage, Enemy's magical damage dealt reduced to 79%",
                5: "TP 5: This attack deals 100% damage, Enemy's magical damage dealt reduced to 78%",
                6: "TP 6: This attack deals 110% damage, Enemy's magical damage dealt reduced to 75%"
        },
        
        PhysicalAttackBoost: { 
                1: "105% physical damage dealt",
                2: "109% physical damage dealt",
                3: "112% physical damage dealt",
                4: "115% physical damage dealt",
                5: "117% physical damage dealt",
                6: "119% physical damage dealt",
                7: "121% physical damage dealt",
                8: "123% physical damage dealt",
        },
        
        Vanguard: { 
                1: "TP 6: 110% Damage, 125% Damage dealt to you",
                2: "TP 6: 118% Damage, 125% Damage dealt to you",
                3: "TP 6: 125% Damage, 125% Damage dealt to you",
                4: "TP 6: 130% Damage, 125% Damage dealt to you",
                5: "TP 6: 135% Damage, 125% Damage dealt to you",
                6: "TP 6: 140% Damage, 125% Damage dealt to you",
        },
        
        Mineralogy: { 
                1: "10% Chance",
        },
        
        FirstAid: {
                1: "TP 2: 10 HP healed",
                2: "TP 2: 20 HP healed",
                3: "TP 4: 50 HP healed",
                4: "TP 4: 60 HP healed",
                5: "TP 8: 140 HP healed",
                6: "TP 8: 150 HP healed",
        },
        
        VeteranSwordsman: {
                1: "125% damage dealt, +15 Accuracy",
        },
        
        DoubleStrike: { 
                1: "TP 9: 95% Damage, -3 Speed Modifier",
                2: "TP 9: 102% Damage, -3 Speed Modifier",
                3: "TP 9: 108% Damage, -3 Speed Modifier",
                4: "TP 11: 125% Damage, -1 Speed Modifier",
                5: "TP 11: 129% Damage, -1 Speed Modifier",
                6: "TP 11: 133% Damage, -1 Speed Modifier",
                7: "TP 11: 137% Damage, -1 Speed Modifier",
                8: "TP 13: 150% Damage, +0 Speed Modifier",
        },
        
        RoundSword: {
                1: "TP 11: 155% Damage, 50% Spread",
                2: "TP 11: 165% Damage, 50% Spread",
                3: "TP 11: 175% Damage, 50% Spread",
                4: "TP 13: 195% Damage, 50% Spread",
                5: "TP 13: 202% Damage, 50% Spread",
                6: "TP 13: 209% Damage, 50% Spread",
                7: "TP 13: 215% Damage, 50% Spread",
                8: "TP 16: 230% Damage, 50% Spread",
        },
        
        Penetrate: {
                1: "TP 11: 180% Damage",
                2: "TP 11: 190% Damage",
                3: "TP 11: 200% Damage",
                4: "TP 13: 230% Damage",
                5: "TP 13: 238% Damage",
                6: "TP 13: 246% Damage",
                7: "TP 13: 254% Damage",
                8: "TP 16: 270% Damage",
        },
        
        PhysicalDefenseBoost: { 
                1: "95% physical damage taken",
                2: "91% physical damage taken",
                3: "88% physical damage taken",
                4: "85% physical damage taken",
                5: "83% physical damage taken",
                6: "81% physical damage taken",
                7: "79% physical damage taken",
                8: "77% physical damage taken",
        },
        
        SwordBreaker: { 
                1: "5% Chance",
                2: "10% Chance",
                3: "15% Chance",
                4: "18% Chance",
                5: "20% Chance",
                6: "22% Chance",
        },
        
        LinkPlus: {
                1: "TP 7: 3 Chases",
                2: "TP 8: 4 Chases",
                3: "TP 9: 5 Chases",
                4: "TP 10: 6 Chases",
                5: "TP 9: 6 Chases",
                6: "TP 8: 6 Chases",
                7: "TP 7: 6 Chases",
                8: "TP 10: 7 Chases",
        },
        
        FirstStrike: {
                1: "110% Damage, +10 Accuracy",
                2: "115% Damage, +15 Accuracy",
                3: "125% Damage, +18 Accuracy",
                4: "130% Damage, +20 Accuracy",
                5: "133% Damage, +22 Accuracy",
                6: "136% Damage, +23 Accuracy",
                7: "138% Damage, +24 Accuracy",
                8: "140% Damage, +25 Accuracy",
        },
        
        StrongCuisine: { 
                1: "Food STR bonus/penalty +/- 44%",
                2: "Food STR bonus/penalty +/- 63%",
                3: "Food STR bonus/penalty +/- 77%",
                4: "Food STR bonus/penalty +/- 89%",
                5: "Food STR bonus/penalty +/- 100%",
        },
        
        MasterSwordsman: {
                1: "130% damage dealt, +20 Accuracy",
        },
        
        TempestSword: {
                1: "TP 13: 270% Damage",
                2: "TP 13: 290% Damage",
                3: "TP 13: 310% Damage",
                4: "TP 15: 350% Damage",
                5: "TP 15: 360% Damage",
                6: "TP 15: 370% Damage",
                7: "TP 15: 380% Damage",
                8: "TP 13: 400% Damage",
        },
        
        FalconThrust: {
                1: "TP 16: 3 Attacks, 95% Damage",
                2: "TP 16: 3 Attacks, 99% Damage",
                3: "TP 16: 3 Attacks, 103% Damage",
                4: "TP 19: 3-4 Attacks, 105% Damage",
                5: "TP 19: 3-4 Attacks, 108% Damage",
                6: "TP 19: 3-4 Attacks, 111% Damage",
                7: "TP 19: 3-4 Attacks, 113% Damage",
                8: "TP 23: 3-4 Attacks, 125% Damage",
        },
        
        Expertise: {
                1: "90% Damage Taken",
                2: "85% Damage Taken",
                3: "80% Damage Taken",
                4: "76% Damage Taken",
                5: "73% Damage Taken",
                6: "70% Damage Taken",
        },
        
        LinkMastery: {
                1: "+3% Damage Per Follow-up",
                2: "+4% Damage Per Follow-up",
                3: "+5% Damage Per Follow-up",
                4: "+6% Damage Per Follow-up",
                5: "+7% Damage Per Follow-up",
                6: "+8% Damage Per Follow-up",
        }
},

Runemaster:{
        NoviceRuneMaster: { 
                1: "+10% Damage Dealt, -5% Damage Taken"
        },
        
        VeteranRuneMaster: {
                1: "+13% Damage Dealt, -8% Damage Taken"
        },
        
        MasterRuneMaster: { 
                1: "+15% Damage Dealt, -10% Damage Taken"
        },
        
        Herbalism: { 
                1: "10% Chance"
        },
        
        SmartCuisine: { 
                1: "Food TEC bonus/penalty +/- 44%",
                2: "Food TEC bonus/penalty +/- 63%",
                3: "Food TEC bonus/penalty +/- 77%",
                4: "Food TEC bonus/penalty +/- 89%",
                5: "Food TEC bonus/penalty +/- 100%",
        },
        
        SymbolofFlame: { 
                1: "TP 6: 115% Fire Damage Dealt, 75% Fire Damage Taken",
                2: "TP 6: 120% Fire Damage Dealt, 70% Fire Damage Taken",
                3: "TP 7: 130% Fire Damage Dealt, 60% Fire Damage Taken",
                4: "TP 7: 131% Fire Damage Dealt, 58% Fire Damage Taken",
                5: "TP 7: 132% Fire Damage Dealt, 56% Fire Damage Taken",
                6: "TP 8: 135% Fire Damage Dealt, 50% Fire Damage Taken",
        },
        
        SymbolofIce: { 
                1: "TP 6: 115% Ice Damage Dealt, 75% Ice Damage Taken",
                2: "TP 6: 120% Ice Damage Dealt, 70% Ice Damage Taken",
                3: "TP 7: 130% Ice Damage Dealt, 60% Ice Damage Taken",
                4: "TP 7: 131% Ice Damage Dealt, 58% Ice Damage Taken",
                5: "TP 7: 132% Ice Damage Dealt, 56% Ice Damage Taken",
                6: "TP 8: 135% Ice Damage Dealt, 50% Ice Damage Taken",

        },
        
        SymbolofThunder: {
                1: "TP 6: 115% Volt Damage Dealt, 75% Volt Damage Taken",
                2: "TP 6: 120% Volt Damage Dealt, 70% Volt Damage Taken",
                3: "TP 7: 130% Volt Damage Dealt, 60% Volt Damage Taken",
                4: "TP 7: 131% Volt Damage Dealt, 58% Volt Damage Taken",
                5: "TP 7: 132% Volt Damage Dealt, 56% Volt Damage Taken",
                6: "TP 8: 135% Volt Damage Dealt, 50% Volt Damage Taken",
        },
        
        RuneofFireball: {
                1: "TP 8: 35% Damage, 50% Splash",
                2: "TP 8: 39% Damage, 50% Splash",
                3: "TP 8: 42% Damage, 50% Splash",
                4: "TP 8: 45% Damage, 50% Splash",
                5: "TP 11: 55% Damage, 50% Splash",
                6: "TP 11: 57% Damage, 50% Splash",
                7: "TP 11: 59% Damage, 50% Splash",
                8: "TP 11: 61% Damage, 50% Splash",
                9: "TP 11: 63% Damage, 50% Splash",
                10: "TP 15: 70% Damage, 50% Splash",
        },
        
        RuneofIceSpear: {
                1: "TP 8: 30% Damage",
                2: "TP 8: 34% Damage",
                3: "TP 8: 37% Damage",
                4: "TP 11: 40% Damage",
                5: "TP 11: 50% Damage",
                6: "TP 11: 53% Damage",
                7: "TP 11: 55% Damage",
                8: "TP 11: 57% Damage",
                9: "TP 11: 59% Damage",
                10: "TP 15: 65% Damage",
        },
        
        RuneofLightning: {
                1: "TP 8: 45% Damage",
                2: "TP 8: 49% Damage",
                3: "TP 8: 52% Damage",
                4: "TP 8: 55% Damage",
                5: "TP 11: 65% Damage",
                6: "TP 11: 67% Damage",
                7: "TP 11: 69% Damage",
                8: "TP 11: 71% Damage",
                9: "TP 11: 73% Damage",
                10: "TP 15: 80% Damage",
        },
        
        RuneShine: {
                1: "TP 4: 128% Damage",
                2: "TP 4: 131% Damage",
                3: "TP 6: 137% Damage",
                4: "TP 6: 139% Damage",
                5: "TP 6: 141% Damage",
                6: "TP 8: 145% Damage",
        },
        
        TPBoost: {
                1: "110% Max TP",
                2: "115% Max TP",
                3: "119% Max TP",
                4: "123% Max TP",
                5: "127% Max TP",
                6: "130% Max TP",
                7: "133% Max TP",
                8: "136% Max TP",        
        },
        
        RuneofExplosion: {
                1: "TP 15: 45% Damage",
                2: "TP 15: 47% Damage",
                3: "TP 15: 49% Damage",
                4: "TP 20: 55% Damage",
                5: "TP 20: 57% Damage",
                6: "TP 20: 59% Damage",
                7: "TP 20: 61% Damage",
                8: "TP 25: 65% Damage",
        },
                
        RuneofIceFang: {
                1: "TP 15: 28% Damage, 2-3 attacks",
                2: "TP 15: 29% Damage, 2-3 attacks",
                3: "TP 15: 30% Damage, 2-3 attacks",
                4: "TP 20: 30% Damage, 2-4 attacks",
                5: "TP 20: 31% Damage, 2-4 attacks",
                6: "TP 20: 32% Damage, 2-4 attacks",
                7: "TP 20: 33% Damage, 2-4 attacks",
                8: "TP 25: 33% Damage, 3-4 attacks",
        },
        
        RuneofThunderclap: {
                1: "TP 15: 75% Damage",
                2: "TP 15: 80% Damage",
                3: "TP 15: 85% Damage",
                4: "TP 20: 95% Damage",
                5: "TP 20: 99% Damage",
                6: "TP 20: 102% Damage",
                7: "TP 20: 104% Damage",
                8: "TP 25: 110% Damage",
        },
        
        RuneShield: {
                1: "5% Chance",
                2: "10% Chance",
                3: "13% Chance",
                4: "15% Chance",
        },
        
        RunicPrecision: {
                1: "125% Damage",
                2: "130% Damage",
                3: "134% Damage",
                4: "136% Damage",
                5: "138% Damage",
                6: "140% Damage",
        },
        
        TPConservation: {
                1: "8% Chance",
                2: "13% Chance",
                3: "18% Chance",
                4: "21% Chance",
                5: "23% Chance",
                6: "25% Chance",
        },
        
        RunicAttackBoost: {
                1: "105% Damage",
                2: "109% Damage",
                3: "112% Damage",
                4: "115% Damage",
                5: "117% Damage",
                6: "119% Damage",
                7: "121% Damage",
                8: "123% Damage",
                9: "124% Damage",
                10: "125% Damage",
        },
        
        RuneofConflagration: {
                1: "TP 25: 85% Damage",
                2: "TP 25: 90% Damage",
                3: "TP 25: 95% Damage",
                4: "TP 30: 110% Damage",
                5: "TP 30: 114% Damage",
                6: "TP 30: 117% Damage",
                7: "TP 30: 119% Damage",
                8: "TP 35: 125% Damage",
        },
        
        RuneofBlizzard: {
                1: "TP 25: 60% Damage",
                2: "TP 25: 63% Damage",
                3: "TP 25: 66% Damage",
                4: "TP 30: 75% Damage",
                5: "TP 30: 77% Damage",
                6: "TP 30: 79% Damage",
                7: "TP 30: 81% Damage",
                8: "TP 35: 85% Damage",
        },
        
        RuneofStorm: {
                1: "TP 25: 28% Damage, 2-4 attacks",
                2: "TP 25: 29% Damage, 2-4 attacks",
                3: "TP 25: 30% Damage, 2-4 attacks",
                4: "TP 30: 30% Damage, 3-4 attacks",
                5: "TP 30: 31% Damage, 3-4 attacks",
                6: "TP 30: 32% Damage, 3-4 attacks",
                7: "TP 30: 33% Damage, 3-4 attacks",
                8: "TP 35: 33% Damage, 3-5 attacks",
        },
        
        RunicMastery: {
                1: "105% Damage",
                2: "110% Damage",
                3: "114% Damage",
                4: "118% Damage",
                5: "120% Damage",
                6: "122% Damage",
                7: "124% Damage",
                8: "125% Damage",
        },
        
        RuneofPrimordials: { 
                1: "TP 45: 100% Damage",
                2: "TP 45: 105% Damage",
                3: "TP 45: 110% Damage",
                4: "TP 55: 120% Damage",
                5: "TP 55: 124% Damage",
                6: "TP 55: 129% Damage",
                7: "TP 55: 132% Damage",
                8: "TP 65: 140% Damage",
        },
},

Nightseeker:{
        NoviceAssassin: {
                1: "+100% Damage",
        },
        
        VeteranAssassin: {
                1: "+140% Damage",
        },
        
        MasterAssassin: {
                1: "+180% Damage",
        },
        
        Herbalism: {
                1: "10% Chance",
        },
        
        AgileCuisine: {
                1: "Food AGI bonus/penalty +/- 44%",
                2: "Food AGI bonus/penalty +/- 63%",
                3: "Food AGI bonus/penalty +/- 77%",
                4: "Food AGI bonus/penalty +/- 89%",
                5: "Food AGI bonus/penalty +/- 100%",
        },
        
        IceSlash: {
                1: "TP 8: 150% Damage",
                2: "TP 8: 157% Damage",
                3: "TP 8: 164% Damage",
                4: "TP 8: 170% Damage",
                5: "TP 9: 190% Damage",
                6: "TP 9: 194% Damage",
                7: "TP 9: 198% Damage",
                8: "TP 9: 202% Damage",
                9: "TP 9: 206% Damage",
                10: "TP 10: 220% Damage",
        },
        
        TheSlowKnife: {
                1: "TP 10: 130% Damage",
                2: "TP 10: 137% Damage",
                3: "TP 10: 144% Damage",
                4: "TP 10: 150% Damage",
                5: "TP 12: 165% Damage",
                6: "TP 12: 169% Damage",
                7: "TP 12: 173% Damage",
                8: "TP 12: 177% Damage",
                9: "TP 12: 180% Damage",
                10: "TP 14: 190% Damage",
        },
        
        BlindingThrow: {
                1: "TP 2: 80% Damage, +1 Accuracy, 45% chance to inflict blind",
                2: "TP 2: 80% Damage, +1 Accuracy, 50% chance to inflict blind",
                3: "TP 2: 80% Damage, +2 Accuracy, 55% chance to inflict blind",
                4: "TP 3: 80% Damage, +2 Accuracy, 63% chance to inflict blind",
                5: "TP 3: 80% Damage, +3 Accuracy, 67% chance to inflict blind",
                6: "TP 3: 80% Damage, +3 Accuracy, 70% chance to inflict blind",
        },
        
        ParalyzingThrow: {
                1: "TP 3: 80% Damage, +1 Accuracy, 45% chance to inflict paralysis",
                2: "TP 3: 80% Damage, +1 Accuracy, 50% chance to inflict paralysis",
                3: "TP 3: 80% Damage, +2 Accuracy, 55% chance to inflict paralysis",
                4: "TP 4: 80% Damage, +2 Accuracy, 63% chance to inflict paralysis",
                5: "TP 4: 80% Damage, +3 Accuracy, 67% chance to inflict paralysis",
                6: "TP 4: 80% Damage, +3 Accuracy, 70% chance to inflict paralysis",
        },
        
        ShadowBlade: {
                1: "30% Damage with second attack",
                2: "40% Damage with second attack",
                3: "50% Damage with second attack",
                4: "60% Damage with second attack",
                5: "70% Damage with second attack",
                6: "80% Damage with second attack",
        },
        
        HideCloak: {
                1: "TP 9",
                2: "TP 8",
                3: "TP 6",
                4: "TP 4",
        },
        
        PreemptiveCloak: {
                1: "25% Chance",
                2: "35% Chance",
                3: "43% Chance",
                4: "49% Chance",
                5: "55% Chance",
                6: "60% Chance",
        },
        
        Diversion: {
                1: "TP 4: +4 Aggro",
                2: "TP 4: +6 Aggro",
                3: "TP 4: +8 Aggro",
                4: "TP 4: +9 Aggro",
        },
        
        Assassination: {
                1: "TP 12: 150% Damage, 20% Chance of death, 30% w/status, -3 Speed modifier",
                2: "TP 12: 155% Damage, 23% Chance of death, 34% w/status, -3 Speed modifier",
                3: "TP 12: 160% Damage, 26% Chance of death, 38% w/status, -3 Speed modifier",
                4: "TP 13: 170% Damage, 28% Chance of death, 42% w/status, -3 Speed modifier",
                5: "TP 13: 175% Damage, 30% Chance of death, 44% w/status, -2 Speed modifier",
                6: "TP 13: 180% Damage, 32% Chance of death, 46% w/status, -2 Speed modifier",
                7: "TP 13: 185% Damage, 34% Chance of death, 47% w/status, -2 Speed modifier",
                8: "TP 14: 195% Damage, 35% Chance of death, 50% w/status, -1 Speed modifier",
        },
        
        CruelStrike: {
                1: "TP 15: 170% Damage, 323% w/status",
                2: "TP 15: 175% Damage, 332% w/status",
                3: "TP 15: 180% Damage, 342% w/status",
                4: "TP 17: 195% Damage, 380% w/status",
                5: "TP 17: 200% Damage, 390% w/status",
                6: "TP 17: 204% Damage, 397% w/status",
                7: "TP 17: 208% Damage, 405% w/status",
                8: "TP 20: 220% Damage, 440% w/status",
        },
        
        KnockoutThrow: {
                1: "TP 3: 80% Damage, +1 Accuracy, 45% chance to inflict sleep",
                2: "TP 3: 80% Damage, +1 Accuracy, 50% chance to inflict sleep",
                3: "TP 3: 80% Damage, +2 Accuracy, 55% chance to inflict sleep",
                4: "TP 4: 80% Damage, +2 Accuracy, 63% chance to inflict sleep",
                5: "TP 4: 80% Damage, +3 Accuracy, 67% chance to inflict sleep",
                6: "TP 4: 80% Damage, +3 Accuracy, 70% chance to inflict sleep",
        },
        
        AccursedThrow: {
                1: "TP 3: 80% Damage, +1 Accuracy, 45% chance to inflict curse",
                2: "TP 3: 80% Damage, +1 Accuracy, 50% chance to inflict curse",
                3: "TP 3: 80% Damage, +2 Accuracy, 55% chance to inflict curse",
                4: "TP 4: 80% Damage, +2 Accuracy, 63% chance to inflict curse",
                5: "TP 4: 80% Damage, +3 Accuracy, 67% chance to inflict curse",
                6: "TP 4: 80% Damage, +3 Accuracy, 70% chance to inflict curse",
        },
        
        SpreadThrow: {
                1: "TP 8",
                2: "TP 6",
                3: "TP 4",
                4: "TP 2",
        },
        
        Alertness: {
                1: "TP 6: 40 Steps, +25% Preemptive Chance",
                2: "TP 7: 45 Steps, +30% Preemptive Chance",
                3: "TP 8: 50 Steps, +35% Preemptive Chance",
                4: "TP 9: 55 Steps, +40% Preemptive Chance (Prevents Ambush)",
                5: "TP 10: 60 Steps, +45% Preemptive Chance (Prevents Ambush)",
                6: "TP 11: 65 Steps, +50% Preemptive Chance (Prevents Ambush)",
        },
        
        SpeedBoost: {
                1: "+1 Speed modifier, +2 Accuracy/Evasion",
                2: "+2 Speed modifier, +5 Accuracy/Evasion",
                3: "+3 Speed modifier, +7 Accuracy/Evasion",
                4: "+4 Speed modifier, +9 Accuracy/Evasion",
                5: "+5 Speed modifier, +10 Accuracy/Evasion",
                6: "+6 Speed modifier, +11 Accuracy/Evasion",
                7: "+7 Speed modifier, +12 Accuracy/Evasion",
                8: "+8 Speed modifier, +13 Accuracy/Evasion",
                9: "+9 Speed modifier, +14 Accuracy/Evasion",
                10: "+10 Speed modifier, +15 Accuracy/Evasion",
        },
        
        BladeFlurry: {
                1: "TP 21: 85% Damage, 3-4 attacks",
                2: "TP 21: 90% Damage, 3-4 attacks",
                3: "TP 21: 95% Damage, 3-4 attacks",
                4: "TP 24: 100% Damage, 4 attacks",
                5: "TP 24: 104% Damage, 4 attacks",
                6: "TP 24: 107% Damage, 4 attacks",
                7: "TP 24: 109% Damage, 4 attacks",
                8: "TP 28: 110% Damage, 4-5 attacks",
        },
        
        VenomousThrow: {
                1: "TP 6: 80% Damage, +1 Accuracy, 60% chance to poison inflicting 200 damage per round",
                2: "TP 6: 80% Damage, +1 Accuracy, 65% chance to poison inflicting 270 damage per round",
                3: "TP 6: 80% Damage, +2 Accuracy, 70% chance to poison inflicting 350 damage per round",
                4: "TP 7: 80% Damage, +2 Accuracy, 74% chance to poison inflicting 500 damage per round",
                5: "TP 7: 80% Damage, +3 Accuracy, 77% chance to poison inflicting 600 damage per round",
                6: "TP 7: 80% Damage, +3 Accuracy, 80% chance to poison inflicting 700 damage per round",
        },
        
        StatusMastery: {
                1: "+7% damage increase, +100% maximum",
                2: "+11% damage increase, +100% maximum",
                3: "+14% damage increase, +100% maximum",
                4: "+17% damage increase, +100% maximum",
                5: "+19% damage increase, +100% maximum",
                6: "+21% damage increase, +100% maximum",
                7: "+23% damage increase, +100% maximum",
                8: "+25% damage increase, +100% maximum",
        },
        
        ShadowSkills: {
                1: "25% chance",
                2: "30% chance",
                3: "35% chance",
                4: "40% chance",
                5: "43% chance",
                6: "46% chance",
                7: "48% chance",
                8: "50% chance",
        },
        
        PreemptiveSpread: {
                1: "25% chance",
                2: "35% chance",
                3: "43% chance",
                4: "49% chance",
                5: "55% chance",
                6: "60% chance",
        },
},

Fortress: {
        NoviceFortress: {
                1: "3 TP recovered",
        },
        
        VeteranFortress: {
                1: "4 TP recovered",
        },
        
        MasterFortress: {
                1: "5 TP recovered",
        },
        
        Mineralogy: {
                1: "10% Chance",
        },
        
        ToughCuisine: {
                1: "Food VIT bonus/penalty +/- 44%",
                2: "Food VIT bonus/penalty +/- 63%",
                3: "Food VIT bonus/penalty +/- 77%",
                4: "Food VIT bonus/penalty +/- 89%",
                5: "Food VIT bonus/penalty +/- 100%",
        },
        
        DefenseBoost: {
                1: "95% damage taken",
                2: "91% damage taken",
                3: "88% damage taken",
                4: "85% damage taken",
                5: "83% damage taken",
                6: "81% damage taken",
                7: "79% damage taken",
                8: "77% damage taken",
                9: "76% damage taken",
                10: "75% damage taken",
        },
        
        Provoke: {
                1: "TP 2: +4 Aggro",
                2: "TP 2: +6 Aggro",
                3: "TP 2: +8 Aggro",
                4: "TP 2: +9 Aggro",
        },
        
        GuardStance: {
                1: "TP 12: 85% physical damage taken",
                2: "TP 12: 82% physical damage taken",
                3: "TP 12: 80% physical damage taken",
                4: "TP 12: 78% physical damage taken",
                5: "TP 12: 76% physical damage taken",
                6: "TP 12: 75% physical damage taken",
        },
        
        Cover: {
                1: "TP 3: 90% damage taken",
                2: "TP 3: 80% damage taken",
                3: "TP 3: 75% damage taken",
                4: "TP 3: 71% damage taken",
                5: "TP 3: 68% damage taken",
                6: "TP 3: 65% damage taken",
        },
        
        BoltStrike: {
                1: "TP 8: 150% Damage",
                2: "TP 8: 157% Damage",
                3: "TP 8: 164% Damage",
                4: "TP 8: 170% Damage",
                5: "TP 9: 190% Damage",
                6: "TP 9: 194% Damage",
                7: "TP 9: 198% Damage",
                8: "TP 9: 202% Damage",
                9: "TP 9: 206% Damage",
                10: "TP 10: 220% Damage",
        },
        
        PreemptiveProvoke: {
                1: "15% chance",
                2: "25% chance",
                3: "35% chance",
                4: "50% chance",
        },
        
        MagicGuardStance: {
                1: "TP 12: 85% elemental damage taken",
                2: "TP 12: 82% elemental damage taken",
                3: "TP 12: 80% elemental damage taken",
                4: "TP 12: 78% elemental damage taken",
                5: "TP 12: 76% elemental damage taken",
                6: "TP 12: 75% elemental damage taken",
        },
        
        HolyStrike: {
                1: "TP 10: 145% damage, heal 70% of damage dealt, -5 Speed modifier",
                2: "TP 10: 150% damage, heal 70% of damage dealt, -4 Speed modifier",
                3: "TP 10: 155% damage, heal 70% of damage dealt, -4 Speed modifier",
                4: "TP 10: 160% damage, heal 70% of damage dealt, -4 Speed modifier",
                5: "TP 12: 175% damage, heal 75% of damage dealt, -3 Speed modifier",
                6: "TP 12: 179% damage, heal 75% of damage dealt, -3 Speed modifier",
                7: "TP 12: 183% damage, heal 75% of damage dealt, -2 Speed modifier",
                8: "TP 12: 187% damage, heal 75% of damage dealt, -2 Speed modifier",
                9: "TP 12: 190% damage, heal 75% of damage dealt, -1 Speed modifier",
                10: "TP 14: 200% damage, heal 80% of damage dealt, -1 Speed modifier",
        },
        
        Sentinel: {
                1: "TP 6: 30 Steps, shows within 1 step",
                2: "TP 6: 40 Steps, shows within 3 step",
                3: "TP 7: 50 Steps, shows within 4 step",
                4: "TP 7: 60 Steps, shows within 6 step",
                5: "TP 8: 80 Steps, shows within 8 step",
                6: "TP 8: 100 Steps, shows within 10 step",
        },
        
        Rampart: {
                1: "TP 8: 80% damage taken",
                2: "TP 8: 77% damage taken",
                3: "TP 8: 75% damage taken",
                4: "TP 8: 73% damage taken",
                5: "TP 8: 71% damage taken",
                6: "TP 8: 70% damage taken",
        },
        
        KnightsProtection: {
                1: "+25% Recovery Chance",
                2: "+32% Recovery Chance",
                3: "+38% Recovery Chance",
                4: "+43% Recovery Chance",
                5: "+47% Recovery Chance",
                6: "+50% Recovery Chance",
        },
        
        LineCover: {
                1: "TP 10: 95% damage taken",
                2: "TP 10: 92% damage taken",
                3: "TP 10: 90% damage taken",
                4: "TP 10: 88% damage taken",
                5: "TP 10: 86% damage taken",
                6: "TP 10: 85% damage taken",
        },
        
        RevengeSmite: {
                1: "TP 14: 180% base damage (100% initial modifier), +40% to modifier per time damaged, 500% modifier max, -5 Accuracy",
                2: "TP 14: 195% base damage (100% initial modifier), +40% to modifier per time damaged, 500% max modifier, -4 Accuracy",
                3: "TP 14: 210% base damage (100% initial modifier), +40% to modifier per time damaged, 500% max modifier, -3 Accuracy",
                4: "TP 14: 250% base damage (100% initial modifier), +40% to modifier per time damaged, 500% max modifier, -2 Accuracy",
                5: "TP 14: 260% base damage (100% initial modifier), +40% to modifier per time damaged, 500% max modifier, -1 Accuracy",
                6: "TP 14: 270% base damage (100% initial modifier), +40% to modifier per time damaged, 500% max modifier, -1 Accuracy",
                7: "TP 14: 280% base damage (100% initial modifier), +40% to modifier per time damaged, 500% max modifier, -1 Accuracy",
                8: "TP 14: 300% base damage (100% initial modifier), +40% to modifier per time damaged, 500% max modifier, -1 Accuracy",
        },
        
        HealWall: {
                1: "10 HP healed",
                2: "15 HP healed",
                3: "20 HP healed",
                4: "25 HP healed",
                5: "29 HP healed",
                6: "33 HP healed",
                7: "37 HP healed",
                8: "40 HP healed",
        },
        
        HolyBlessing: {
                1: "TP 14",
                2: "TP 12",
                3: "TP 9",
                4: "TP 6",
        },
        
        CoverAll: {
                1: "TP 20: 95% damage taken",
                2: "TP 20: 92% damage taken",
                3: "TP 20: 90% damage taken",
                4: "TP 20: 88% damage taken",
                5: "TP 20: 86% damage taken",
                6: "TP 20: 85% damage taken",
        },
        
        HPBoost: {
                1: "110% Max HP",
                2: "115% Max HP",
                3: "119% Max HP",
                4: "123% Max HP",
                5: "127% Max HP",
                6: "130% Max HP",
                7: "133% Max HP",
                8: "136% Max HP",
                9: "138% Max HP",
                10: "140% Max HP",
        },
        
        CriticalCover: {
                1: "TP 20: 95% damage taken",
                2: "TP 20: 92% damage taken",
                3: "TP 20: 90% damage taken",
                4: "TP 20: 88% damage taken",
                5: "TP 20: 86% damage taken",
                6: "TP 20: 85% damage taken",
        },
        
        EarthShatter: {
                1: "TP 24: 285% damage to target and self",
                2: "TP 24: 300% damage to target and self",
                3: "TP 24: 315% damage to target and self",
                4: "TP 27: 345% damage to target and self",
                5: "TP 27: 354% damage to target and self",
                6: "TP 27: 362% damage to target and self",
                7: "TP 27: 370% damage to target and self",
                8: "TP 30: 380% damage to target and self",
        },
        
        CoverMastery: {
                1: "4% chance to trigger",
                2: "7% chance to trigger",
                3: "10% chance to trigger",
                4: "12% chance to trigger",
                5: "13% chance to trigger",
                6: "14% chance to trigger",
                7: "15% chance to trigger",
                8: "16% chance to trigger",
        },
},

Bushi: {
        NoviceSamurai: {
                1: "8 TP recovered",
        },
        
        VeteranSamurai: {
                1: "10 TP recovered",
        },
        
        MasterSamurai: { 
                1: "12 TP recovered",
        },
        
        Forestry: { 
                1: "10% chance",
        },
        
        HealthyCuisine: { 
                1: "Food HP bonus/penalty +/- 44%",
                2: "Food HP bonus/penalty +/- 63%",
                3: "Food HP bonus/penalty +/- 77%",
                4: "Food HP bonus/penalty +/- 89%",
                5: "Food HP bonus/penalty +/- 100%",
        },
                
        AttackBoost: { 
                1: "105% physical damage dealt",
                2: "109% physical damage dealt",
                3: "112% physical damage dealt",
                4: "115% physical damage dealt",
                5: "117% physical damage dealt",
                6: "119% physical damage dealt",
                7: "121% physical damage dealt",
                8: "123% physical damage dealt",
                9: "124% physical damage dealt",
                10: "125% physical damage dealt",
        },
        
        Roar: { 
                1: "TP 5: 100% damage",
                2: "TP 5: 115% damage",
                3: "TP 5: 130% damage",
                4: "TP 5: 150% damage",
        },
        
        Rage: { 
                1: "TP 2: 145% damage dealt, actions take 10 HP and 5 TP",
                2: "TP 2: 150% damage dealt, actions take 23 HP and 6 TP",
                3: "TP 2: 155% damage dealt, actions take 51 HP and 7 TP",
                4: "TP 2: 160% damage dealt, actions take 89 HP and 8 TP",
                5: "TP 2: 165% damage dealt, actions take 135 HP and 9 TP",
                6: "TP 2: 170% damage dealt, actions take 197 HP and 10 TP",
        },
        
        MountainStrike: {
                1: "TP 5: 115% damage, 30% chance to paralyze",
                2: "TP 5: 120% damage, 32% chance to paralyze",
                3: "TP 5: 125% damage, 34% chance to paralyze",
                4: "TP 6: 140% damage, 40% chance to paralyze",
                5: "TP 6: 145% damage, 41% chance to paralyze",
                6: "TP 6: 148% damage, 42% chance to paralyze",
                7: "TP 6: 150% damage, 43% chance to paralyze",
                8: "TP 7: 160% damage, 45% chance to paralyze",
        },

        Endure: { 
                1: "10 HP when revived",
                2: "50 HP when revived",
                3: "100 HP when revived",
                4: "200 HP when revived",
        },
        
        HeadCrush: { 
                1: "TP 7: 135% damage, 40% chance to seal head",
                2: "TP 7: 140% damage, 42% chance to seal head",
                3: "TP 7: 145% damage, 44% chance to seal head",
                4: "TP 8: 160% damage, 46% chance to seal head",
                5: "TP 8: 165% damage, 48% chance to seal head",
                6: "TP 8: 170% damage, 50% chance to seal head",
                7: "TP 8: 175% damage, 52% chance to seal head",
                8: "TP 10: 185% damage, 55% chance to seal head",
        },
        
        CresentSwing: { 
                1: "TP 10: 130% damage, -3 Speed modifier",
                2: "TP 10: 135% damage, -3 Speed modifier",
                3: "TP 10: 140% damage, -3 Speed modifier",
                4: "TP 12: 150% damage, -3 Speed modifier",
                5: "TP 12: 155% damage, -2 Speed modifier",
                6: "TP 12: 159% damage, -2 Speed modifier",
                7: "TP 12: 162% damage, -2 Speed modifier",
                8: "TP 14: 170% damage, -1 Speed modifier",
        },
        
        Charge: { 
                1: "TP 2: 180% damage",
                2: "TP 2: 200% damage",
                3: "TP 2: 210% damage",
                4: "TP 2: 220% damage",
        },
        
        PreemptiveRage: { 
                1: "15% chance",
                2: "25% chance",
                3: "33% chance",
                4: "40% chance",
        },
        
        Calm: { 
                1: "TP 1: 80 HP and 20 TP recovered",
                2: "TP 1: 140 HP and 30 TP recovered",
                3: "TP 1: 270 HP and 40 TP recovered",
                4: "TP 1: 350 HP and 50 TP recovered",
        },
        
        RecklessSwing: { 
                1: "TP 16: 25% current HP, 130% damage, -9 Speed modifier, -5 Accuracy",
                2: "TP 16: 25% current HP, 138% damage, -9 Speed modifier, -5 Accuracy",
                3: "TP 16: 25% current HP, 145% damage, -9 Speed modifier, -5 Accuracy",
                4: "TP 18: 25% current HP, 160% damage, -7 Speed modifier, -4 Accuracy",
                5: "TP 18: 25% current HP, 165% damage, -7 Speed modifier, -4 Accuracy",
                6: "TP 18: 25% current HP, 168% damage, -7 Speed modifier, -4 Accuracy",
                7: "TP 18: 25% current HP, 170% damage, -7 Speed modifier, -4 Accuracy",
                8: "TP 20: 25% current HP, 180% damage, -6 Speed modifier, --3 Accuracy",
        },

        Abandonment: {
                1: "110% physical damage dealt",
                2: "115% physical damage dealt",
                3: "119% physical damage dealt",
                4: "122% physical damage dealt",
                5: "124% physical damage dealt",
                6: "126% physical damage dealt",
                7: "128% physical damage dealt",
                8: "130% physical damage dealt",
        },
        
        MoltenHammer: { 
                1: "TP 12: 170% Damage",
                2: "TP 12: 180% Damage",
                3: "TP 12: 190% Damage",
                4: "TP 14: 215% Damage",
                5: "TP 14: 225% Damage",
                6: "TP 14: 235% Damage",
                7: "TP 14: 245% Damage",
                8: "TP 16: 260% Damage",
        },
        
        FrozenBlade: { 
                1: "TP 12: 170% Damage",
                2: "TP 12: 180% Damage",
                3: "TP 12: 190% Damage",
                4: "TP 14: 215% Damage",
                5: "TP 14: 225% Damage",
                6: "TP 14: 235% Damage",
                7: "TP 14: 245% Damage",
                8: "TP 16: 260% Damage",
        },

        HealingWay: { 
                1: "Heal 20 HP per attack",
                2: "Heal 38 HP per attack",
                3: "Heal 56 HP per attack",
                4: "Heal 75 HP per attack",
                5: "Heal 90 HP per attack",
                6: "Heal 103 HP per attack",
                7: "Heal 115 HP per attack",
                8: "Heal 125 HP per attack",
        },
        
        RageMastery: { 
                1: "Damage dealt 100% ~ 130% (+1% per 3% of TP below max), Damage taken 100% ~ 70% (-1% per 3.33% HP below max)",
                2: "Damage dealt 102% ~ 132% (+1% per 3% of TP below max), Damage taken 100% ~ 69% (-1% per 3.22% HP below max)",
                3: "Damage dealt 104% ~ 134% (+1% per 3% of TP below max), Damage taken 100% ~ 68% (-1% per 3.12% HP below max)",
                4: "Damage dealt 106% ~ 136% (+1% per 3% of TP below max), Damage taken 100% ~ 68% (-1% per 3.12% HP below max)",
                5: "Damage dealt 107% ~ 137% (+1% per 3% of TP below max), Damage taken 100% ~ 67% (-1% per 3% HP below max)",
                6: "Damage dealt 108% ~ 138% (+1% per 3% of TP below max), Damage taken 100% ~ 67% (-1% per 3% HP below max)",
                7: "Damage dealt 109% ~ 139% (+1% per 3% of TP below max) Damage taken 100% ~ 67% (-1% per 3% HP below max)",
                8: "Damage dealt 110% ~ 140% (+1% per 3% of TP below max) Damage taken 100% ~ 67% (-1% per 3% HP below max)",
        },
        
        CrashingWake: { 
                1: "TP 18: 170% damage",
                2: "TP 18: 185% damage",
                3: "TP 18: 200% damage",
                4: "TP 21: 230% damage",
                5: "TP 21: 240% damage",
                6: "TP 21: 250% damage",
                7: "TP 21: 260% damage",
                8: "TP 24: 280% damage",
        },
        
        FlashingBlade: {
                1: "TP 16: 230% damage, +5 Speed modifier, -5 Accuracy",
                2: "TP 16: 245% damage, +5 Speed modifier, -5 Accuracy",
                3: "TP 16: 260% damage, +5 Speed modifier, -5 Accuracy",
                4: "TP 18: 300% damage, +7 Speed modifier, -4 Accuracy",
                5: "TP 18: 310% damage, +7 Speed modifier, -4 Accuracy",
                6: "TP 18: 318% damage, +7 Speed modifier, -4 Accuracy",
                7: "TP 18: 325% damage, +7 Speed modifier, -4 Accuracy",
                8: "TP 21: 340% damage, +8 Speed modifier, -3 Accuracy",
        },

        RiskyGambit: { 
                1: "TP 20: 300% damage",
                2: "TP 20: 315% damage",
                3: "TP 20: 330% damage",
                4: "TP 23: 360% damage",
                5: "TP 23: 375% damage",
                6: "TP 23: 390% damage",
                7: "TP 23: 400% damage",
                8: "TP 27: 430% damage",
        },
        
        FrenziedStrikes: { 
                1: "TP 22: 63% damage, 2-3 attacks at >50% HP, 7-8 attacks at ~1% HP, -8 Accuracy",
                2: "TP 22: 66% damage, 2-3 attacks at >50% HP, 7-8 attacks at ~1% HP, -8 Accuracy",
                3: "TP 22: 68% damage, 2-3 attacks at >50% HP, 7-8 attacks at ~1% HP, -8 Accuracy",
                4: "TP 26: 69% damage, 2-4 attacks at >50% HP, 7-9 attacks at ~1% HP, -7 Accuracy",
                5: "TP 26: 70% damage, 2-4 attacks at >50% HP, 7-9 attacks at ~1% HP, -7 Accuracy",
                6: "TP 26: 72% damage, 2-4 attacks at >50% HP, 7-9 attacks at ~1% HP, -7 Accuracy",
                7: "TP 26: 74% damage, 2-4 attacks at >50% HP, 7-9 attacks at ~1% HP, -7 Accuracy",
                8: "TP 30: 75% damage, 2-5 attacks at >50% HP, 7-10 attacks at ~1% HP, -6 Accuracy",
        },
},

Dancer: {
        NoviceDancer: { 
                1: "Dances last 4 turns",
        },
        
        VeteranDancer: { 
                1: "Dances last 5 turns",
        },
        
        MasterDancer: { 
                1: "Dances last 6 turns",
        },
        
        Forestry: {
                1: "10% chance",
        },
        
        LuckyCuisine: {
                1: "Food LUC bonus/penalty +/- 44%",
                2: "Food LUC bonus/penalty +/- 63%",
                3: "Food LUC bonus/penalty +/- 77%",
                4: "Food LUC bonus/penalty +/- 89%",
                5: "Food LUC bonus/penalty +/- 100%",
        },
        
        FanDance: {
                1: "10% chance to evade",
                2: "14% chance to evade",
                3: "18% chance to evade",
                4: "22% chance to evade",
                5: "25% chance to evade",
                6: "27% chance to evade",
                7: "29% chance to evade",
                8: "31% chance to evade",
                9: "33% chance to evade",
                10: "35% chance to evade",
        },
        
        CounterSamba: { 
                1: "TP 4: 60% counter chance, 100% damage, -3 Accuracy",
                2: "TP 4: 60% counter chance, 105% damage, -3 Accuracy",
                3: "TP 4: 60% counter chance, 110% damage, -3 Accuracy",
                4: "TP 6: 65% counter chance, 115% damage, -2 Accuracy",
                5: "TP 6: 65% counter chance, 120% damage, -2 Accuracy",
                6: "TP 6: 65% counter chance, 125% damage, -1 Accuracy",
                7: "TP 6: 65% counter chance, 130% damage, -1 Accuracy",
                8: "TP 8: 70% counter chance, 135% damage, +0 Accuracy",
        },
        
        AttackTango: { 
                1: "TP 5: 120% damage",
                2: "TP 5: 123% damage",
                3: "TP 5: 125% damage",
                4: "TP 6: 130% damage",
                5: "TP 6: 132% damage",
                6: "TP 6: 134% damage",
                7: "TP 6: 136% damage",
                8: "TP 8: 140% damage",
        },
        
        RegenWaltz: { 
                1: "TP 6: 40% Heal power",
                2: "TP 6: 45% Heal power",
                3: "TP 6: 50% Heal power",
                4: "TP 6: 55% Heal power",
                5: "TP 10: 65% Heal power",
                6: "TP 10: 68% Heal power",
                7: "TP 10: 71% Heal power",
                8: "TP 10: 74% Heal power",
                9: "TP 10: 77% Heal power",
                10: "TP 15: 85% Heal power",
        },
        
        ChaseSamba: { 
                1: "TP 8: 80% damage, -5 Accuracy, 1 chase",
                2: "TP 8: 90% damage, -5 Accuracy, 1 chase",
                3: "TP 8: 100% damage, -4 Accuracy, 1 chase",
                4: "TP 10: 100% damage, -4 Accuracy, 2 chases, 50% chance of 2nd chase",
                5: "TP 10: 107% damage, -3 Accuracy, 2 chases, 50% chance of 2nd chase",
                6: "TP 10: 114% damage, -3 Accuracy, 2 chases, 50% chance of 2nd chase",
                7: "TP 10: 120% damage, -2 Accuracy, 2 chases, 50% chance of 2nd chase",
                8: "TP 12: 120% damage, -1 Accuracy, 2 chases, 75% chance of 2nd chase",
        },
        
        GuardTango: { 
                1: "TP 5: 80% damage taken",
                2: "TP 5: 77% damage taken",
                3: "TP 5: 75% damage taken",
                4: "TP 6: 70% damage taken",
                5: "TP 6: 68% damage taken",
                6: "TP 6: 66% damage taken",
                7: "TP 6: 64% damage taken",
                8: "TP 8: 60% damage taken",
        },
        
        RefreshWaltz: { 
                1: "TP 14",
                2: "TP 12",
                3: "TP 10",
                4: "TP 8",
        },
        
        BurstSave: { 
                1: "10% chance",
                2: "14% chance",
                3: "18% chance",
                4: "21% chance",
                5: "23% chance",
                6: "25% chance",
        },
        
        SwordDance: { 
                1: "2 attacks max, 20% followup chance",
                2: "2 attacks max, 23% followup chance",
                3: "2 attacks max, 26% followup chance",
                4: "2 attacks max, 28% followup chance",
                5: "3 attacks max, 28% followup chance",
                6: "3 attacks max, 30% followup chance",
                7: "3 attacks max, 31% followup chance",
                8: "3 attacks max, 32% followup chance",
                9: "3 attacks max, 33% followup chance",
                10: "4 attacks max, 33% followup chance",
        },
        
        TrickSamba: { 
                1: "TP 10: 2 chases, -3 Accuracy, 80% damage, 50% 2nd chase chance",
                2: "TP 10: 2 chases, -3 Accuracy, 90% damage, 50% 2nd chase chance",
                3: "TP 10: 2 chases, -3 Accuracy, 100% damage, 50% 2nd chase chance",
                4: "TP 12: 3 chases, -2 Accuracy, 100% damage, 65% 2nd chase chance, 30% 3rd chase chance",
                5: "TP 12: 3 chases, -2 Accuracy, 107% damage, 65% 2nd chase chance, 30% 3rd chase chance",
                6: "TP 12: 3 chases, -2 Accuracy, 114% damage, 65% 2nd chase chance, 30% 3rd chase chance",
                7: "TP 12: 3 chases, -1 Accuracy, 120% damage, 65% 2nd chase chance, 30% 3rd chase chance",
                8: "TP 14: 3 chases, +0 Accuracy, 120% damage, 75% 2nd chase chance, 50% 3rd chase chance",
        },
        
        EnergyTango: { 
                1: "TP 6: -3 TP costs",
                2: "TP 8: -4 TP costs",
                3: "TP 10: -5 TP costs",
                4: "TP 12: -6 TP costs",
                5: "TP 14: -7 TP costs",
                6: "TP 16: -8 TP costs",
        },
        
        RecoveryWaltz: { 
                1: "TP 14",
                2: "TP 12",
                3: "TP 10",
                4: "TP 8",
        },
        
        RushDance: { 
                1: "TP 14: 100% damage, -3 Accuracy, 3 chases, 75% 2nd chase chance, 50% 3rd chase chance",
                2: "TP 14: 105% damage, -3 Accuracy, 3 chases, 75% 2nd chase chance, 50% 3rd chase chance",
                3: "TP 14: 110% damage, -3 Accuracy, 3 chases, 75% 2nd chase chance, 50% 3rd chase chance",
                4: "TP 17: 115% damage, -2 Accuracy, 4 chases, 80% 2nd chase chance, 60% 3rd chase chance, 40% 4th chase chance",
                5: "TP 17: 120% damage, -2 Accuracy, 4 chases, 80% 2nd chase chance, 60% 3rd chase chance, 40% 4th chase chance",
                6: "TP 17: 125% damage, -2 Accuracy, 4 chases, 80% 2nd chase chance, 60% 3rd chase chance, 40% 4th chase chance",
                7: "TP 17: 130% damage, -2 Accuracy, 4 chases, 80% 2nd chase chance, 60% 3rd chase chance, 40% 4th chase chance",
                8: "TP 20: 135% damage, -1 Accuracy, 5 chases, 85% 2nd chase chance, 70% 3rd chase chance, 55% 4th chase chance, 40% 5th chase chance, ",
        },
        
        WideDance: { 
                1: "TP 8",
                2: "TP 6",
                3: "TP 4",
                4: "TP 2",
        },
        
        HealDance: { 
                1: "TP 15: 50% heal power",
                2: "TP 15: 55% heal power",
                3: "TP 15: 60% heal power",
                4: "TP 15: 65% heal power",
                5: "TP 20: 80% heal power",
                6: "TP 20: 83% heal power",
                7: "TP 20: 86% heal power",
                8: "TP 20: 88% heal power",
                9: "TP 20: 90% heal power",
                10: "TP 25: 100% heal power",
        },
        
        HazeDance: { 
                1: "10% chance to stun",
                2: "14% chance to stun",
                3: "17% chance to stun",
                4: "20% chance to stun",
                5: "22% chance to stun",
                6: "24% chance to stun",
                7: "26% chance to stun",
                8: "28% chance to stun",
        },
        
        SpeedBoost: { 
                1: "+1 Speed, +2 Accuracy, ",
                2: "+2 Speed, +5 Accuracy, ",
                3: "+3 Speed, +7 Accuracy, ",
                4: "+4 Speed, +9 Accuracy, ",
                5: "+5 Speed, +10 Accuracy, ",
                6: "+6 Speed, +11 Accuracy, ",
                7: "+7 Speed, +12 Accuracy, ",
                8: "+8 Speed, +13 Accuracy, ",
        },
        
        BeatDance: { 
                1: "TP 12, 120% damage, -10 Accuracy",
                2: "TP 12, 125% damage, -8 Accuracy",
                3: "TP 14, 135% damage, -5 Accuracy",
                4: "TP 14, 140% damage, -3 Accuracy",
                5: "TP 14, 145% damage, -2 Accuracy",
                6: "TP 16, 155% damage, -1 Accuracy",
        },
        
        QuickStep: { 
                1: "TP 12",
                2: "TP 10",
                3: "TP 8",
                4: "TP 6",
        },
        
        DanceMastery: { 
                1: "+1% to min and max Burst energy gained by user (per active Dance buff on user)",
                2: "+2% to min and max Burst energy gained by user (per active Dance buff on user)",
                3: "+3% to min and max Burst energy gained by user (per active Dance buff on user)",
                4: "+4% to min and max Burst energy gained by user (per active Dance buff on user)",
                5: "+5% to min and max Burst energy gained by user (per active Dance buff on user)",
                6: "+6% to min and max Burst energy gained by user (per active Dance buff on user)",
                7: "+7% to min and max Burst energy gained by user (per active Dance buff on user)",
                8: "+8% to min and max Burst energy gained by user (per active Dance buff on user)",
        },
},

Sniper: {
        NoviceSniper: { 
                1: "Increases crit damage by 113% (Crits deal 170% total now), Bow Skill can crit now.",
        },
        
        VeteranSniper: { 
                1: "Increases crit damage by 123% (Crits deal 185% total now)",
        },
        
        MasterSniper: { 
                1: "Increases crit damage by 133% (Crits deal 200% total now)",
        },
        
        Forestry: { 
                1: "10% chance.",
        },
        
        Foraging: { 
                1: "+16% rare food chance.",
                2: "+32% rare food chance.",
                3: "+48% rare food chance.",
                4: "+64% rare food chance.",
                5: "+80% rare food chance.",
        },
        
        Scavenger: { 
                1: "+1% increase",
                2: "+2% increase",
                3: "+3% increase",
                4: "+4% increase",
                5: "+5% increase",
                6: "+6% increase",
        },
        
        LockOn: { 
                1: "TP 4: 30% increase",
                2: "TP 4: 35% increase",
                3: "TP 4: 40% increase",
                4: "TP 6: 45% increase",
                5: "TP 6: 50% increase",
                6: "TP 6: 60% increase",
        },

        LongShot: { 
                1: "TP 4: 140% damage",
                2: "TP 4: 145% damage",
                3: "TP 4: 150% damage",
                4: "TP 4: 155% damage",
                5: "TP 5: 165% damage",
                6: "TP 5: 169% damage",
                7: "TP 5: 173% damage",
                8: "TP 5: 177% damage",
                9: "TP 5: 180% damage",
                10: "TP 6: 190% damage",
        },

        SnipeLeg: { 
                1: "TP 6: 120% damage, 45% to leg bind",
                2: "TP 6: 124% damage, 48% to leg bind",
                3: "TP 6: 128% damage, 50% to leg bind",
                4: "TP 7: 138% damage, 55% to leg bind",
                5: "TP 7: 142% damage, 57% to leg bind",
                6: "TP 7: 146% damage, 59% to leg bind",
                7: "TP 7: 150% damage, 61% to leg bind",
                8: "TP 8: 160% damage, 65% to leg bind",
        },

        Observation: { 
                1: "TP 6: +15 Accuracy",
                2: "TP 6: +25 Accuracy",
                3: "TP 6: +33 Accuracy",
                4: "TP 6: +40 Accuracy",
        },

        ScatterShot: { 
                1: "TP 6: 105% damage",
                2: "TP 6: 110% damage",
                3: "TP 6: 115% damage",
                4: "TP 6: 120% damage",
                5: "TP 6: 130% damage",
                6: "TP 8: 134% damage",
                7: "TP 8: 138% damage",
                8: "TP 8: 142% damage",
                9: "TP 8: 145% damage",
                10: "TP 10: 155% damage",
        },

        FullMetalArrow: { 
                1: "TP 6: 120% damage",
                2: "TP 6: 125% damage",
                3: "TP 6: 130% damage",
                4: "TP 6: 135% damage",
                5: "TP 6: 145% damage",
                6: "TP 8: 149% damage",
                7: "TP 8: 153% damage",
                8: "TP 8: 156% damage",
                9: "TP 8: 160% damage",
                10: "TP 10: 170% damage",
        },

        SnipeArm: { 
                1: "TP 6: 120% damage, 45% to arm bind",
                2: "TP 6: 124% damage, 48% to arm bind",
                3: "TP 6: 128% damage, 50% to arm bind",
                4: "TP 7: 138% damage, 55% to arm bind",
                5: "TP 7: 142% damage, 57% to arm bind",
                6: "TP 7: 146% damage, 59% to arm bind",
                7: "TP 7: 150% damage, 61% to arm bind",
                8: "TP 8: 160% damage, 65% to arm bind",
        },

        Camouflage: { 
                1: "TP 7: 50 steps, 20% Reduced Encounter Rate",
                2: "TP 7: 50 steps, 30% Reduced Encounter Rate",
                3: "TP 7: 50 steps, 40% Reduced Encounter Rate",
                4: "TP 10: 100 steps, 50% Reduced Encounter Rate",
                5: "TP 10: 100 steps, 60% Reduced Encounter Rate",
                6: "TP 10: 100 steps, 70% Reduced Encounter Rate",
        },

        Bullseye: { 
                1: "8% increased crit rate",
                2: "10% increased crit rate",
                3: "12% increased crit rate",
                4: "14% increased crit rate",
                5: "15% increased crit rate",
                6: "16% increased crit rate",
                7: "17% increased crit rate",
                8: "18% increased crit rate",
                9: "19% increased crit rate",
                10: "20% increased crit rate",
        },

        SquallShot: { 
                1: "TP 14: 50% damage, 2-7 attacks",
                2: "TP 14: 50% damage, 2-8 attacks",
                3: "TP 14: 50% damage, 2-9 attacks",
                4: "TP 17: 50% damage, 4-11 attacks",
                5: "TP 17: 50% damage, 4-12 attacks",
                6: "TP 17: 50% damage, 4-13 attacks",
                7: "TP 17: 50% damage, 4-14 attacks",
                8: "TP 22: 50% damage, 6-16 attacks",
        },

        SilverArrow: { 
                1: "TP 11: 180% damage",
                2: "TP 11: 190% damage",
                3: "TP 11: 200% damage",
                4: "TP 12: 220% damage",
                5: "TP 12: 228% damage",
                6: "TP 12: 236% damage",
                7: "TP 12: 244% damage",
                8: "TP 13: 260% damage",
        },

        SnipeHead: { 
                1: "TP 8: 140% damage, 45% to head bind",
                2: "TP 8: 146% damage, 48% to head bind.",
                3: "TP 8: 152% damage, 50% to head bind.",
                4: "TP 10: 164% damage, 55% to head bind.",
                5: "TP 10: 170% damage, 57% to head bind.",
                6: "TP 10: 176% damage, 59% to head bind.",
                7: "TP 10: 182% damage, 61% to head bind.",
                8: "TP 12: 200% damage, 65% to head bind.",
        },

        Vigilance: { 
                1: "30% chance to cancel ambush",
                2: "35% chance to cancel ambush",
                3: "40% chance to cancel ambush",
                4: "45% chance to cancel ambush",
                5: "50% chance to cancel ambush",
                6: "60% chance to cancel ambush",
        },

        EagleEye: { 
                1: "TP 6: 120% damage taken by enemy",
                2: "TP 6: 125% damage taken by enemy",
                3: "TP 6: 128% damage taken by enemy",
                4: "TP 6: 130% damage taken by enemy",
        },

        BindChase: { 
                1: "1 chase max, 100% damage, -10 Accuracy",
                2: "1 chase max, 100% damage, -9 Accuracy",
                3: "1 chase max, 100% damage, -8 Accuracy",
                4: "2 chases max, 100% damage, 65% 2nd chase chance, -7 Accuracy",
                5: "2 chases max, 100% damage, 65% 2nd chase chance, -6 Accuracy",
                6: "2 chases max, 100% damage, 65% 2nd chase chance, -5 Accuracy",
                7: "2 chases max, 100% damage, 65% 2nd chase chance, -4 Accuracy",
                8: "3 chases max, 100% damage, 75% 2nd chase chance, 50% 3rd chase chance, -3 Accuracy",
        },

        AttackBoost: { 
                1: "105% damage",
                2: "109% damage",
                3: "112% damage",
                4: "115% damage",
                5: "117% damage",
                6: "119% damage",
                7: "121% damage",
                8: "123% damage",
        },
        
        HeavensShot: { 
                1: "TP 15: 140% damage (280%, 420%, 560% for 1,2,3 binds)",
                2: "TP 15: 145% damage (290%, 435%, 580% for 1,2,3 binds)",
                3: "TP 15: 150% damage (300%, 450%, 600% for 1,2,3 binds)",
                4: "TP 18: 165% damage (330%, 495%, 660% for 1,2,3 binds)",
                5: "TP 18: 170% damage (340%, 510%, 680% for 1,2,3 binds)",
                6: "TP 18: 174% damage (348%, 522%, 696% for 1,2,3 binds)",
                7: "TP 18: 178% damage (356%, 534%, 712% for 1,2,3 binds)",
                8: "TP 21: 190% damage (380%, 570%, 760% for 1,2,3 binds)",
        },
        
        ImpactArrow: { 
                1: "TP 15: 210% damage",
                2: "TP 15: 220% damage",
                3: "TP 15: 230% damage",
                4: "TP 18: 260% damage",
                5: "TP 18: 270% damage",
                6: "TP 18: 280% damage",
                7: "TP 18: 290% damage",
                8: "TP 21: 300% damage",
        },
        
        SnipeMastery: { 
                1: "Crit rate per bind: +10%",
                2: "Crit rate per bind: +14%",
                3: "Crit rate per bind: +18%",
                4: "Crit rate per bind: +22%",
                5: "Crit rate per bind: +24%",
                6: "Crit rate per bind: +26%",
                7: "Crit rate per bind: +28%",
                8: "Crit rate per bind: +30%",
        },
},

Medic: {
        NoviceMedic: { 
                1: "115% health recovered",
        },

        VeteranMedic: {
                1: "120% health recovered",
        },

        MasterMedic: {
                1: "125% health recovered",
        },

        Herbalism: {
                1: "10% chance",
        },

        Toxicology: {
                1: "Poisonous foods become normal",
        },

        PatchUp: { 
                1: "10 HP recovered",
                2: "17 HP recovered",
                3: "24 HP recovered",
                4: "30 HP recovered",
                5: "35 HP recovered",
                6: "40 HP recovered",
                7: "45 HP recovered",
                8: "50 HP recovered",
        },

        Refresh: { 
                1: "TP 6: Targets a single ally",
                2: "TP 3: Targets a single ally",
                3: "TP 12: Targets a row",
                4: "TP 9: Targets a row",
                5: "TP 6: Targets a row",
                6: "TP 3: Targets a row",
        },

        Heal: {
                1: "TP 5: 70% healing power",
                2: "TP 5: 78% healing power",
                3: "TP 5: 85% healing power",
                4: "TP 5: 90% healing power",
                5: "TP 7: 115% healing power",
                6: "TP 7: 120% healing power",
                7: "TP 7: 124% healing power",
                8: "TP 7: 127% healing power",
                9: "TP 7: 130% healing power",
                10: "TP 10: 150% healing power",
        },

        HeavyStrike: { 
                1: "TP 9: 195% damage, 30% chance to stun, +3 Speed modifier, -5 Accuracy",
                2: "TP 9: 203% damage, 32% chance to stun, +3 Speed modifier, -4 Accuracy",
                3: "TP 9: 210% damage, 34% chance to stun, +3 Speed modifier, -3 Accuracy",
                4: "TP 10: 230% damage, 40% chance to stun, +4 Speed modifier, -2 Accuracy",
                5: "TP 10: 235% damage, 42% chance to stun, +4 Speed modifier, -1 Accuracy",
                6: "TP 10: 240% damage, 44% chance to stun, +4 Speed modifier, +0 Accuracy",
                7: "TP 10: 245% damage, 46% chance to stun, +4 Speed modifier, +0 Accuracy",
                8: "TP 11: 258% damage, 50% chance to stun, +5 Speed modifier, +0 Accuracy",
        },

        BindHeal: {
                1: "TP 6: Targets an ally",
                2: "TP 3: Targets an ally",
                3: "TP 12: Targets a row",
                4: "TP 9: Targets a row",
                5: "TP 6: Targets a row",
                6: "TP 3: Targets a row",
        },

        Treat: {
                1: "TP 6: Targets an ally",
                2: "TP 3: Targets an ally",
                3: "TP 12: Targets a row",
                4: "TP 9: Targets a row",
                5: "TP 6: Targets a row",
                6: "TP 3: Targets a row",
        },

        IntensiveCare: {
                1: "TP 4: 135% healing rate",
                2: "TP 4: 140% healing rate",
                3: "TP 6: 150% healing rate",
                4: "TP 6: 154% healing rate",
                5: "TP 6: 158% healing rate",
                6: "TP 8: 165% healing rate",
        },

        LineHeal: {
                1: "TP 10: 60% healing power",
                2: "TP 10: 65% healing power",
                3: "TP 10: 70% healing power",
                4: "TP 10: 75% healing power",
                5: "TP 15: 95% healing power",
                6: "TP 15: 99% healing power",
                7: "TP 15: 102% healing power",
                8: "TP 15: 105% healing power",
                9: "TP 15: 108% healing power",
                10: "TP 20: 120% healing power",
        },

        SleepBlow: {
                1: "TP 10: 160% damage, 30% chance to cause sleep, +3 Speed modifier, -5 Accuracy",
                2: "TP 10: 170% damage, 32% chance to cause sleep, +3 Speed modifier, -4 Accuracy",
                3: "TP 10: 180% damage, 34% chance to cause sleep, +3 Speed modifier, -3 Accuracy",
                4: "TP 12: 200% damage, 40% chance to cause sleep, +4 Speed modifier, -2 Accuracy",
                5: "TP 12: 208% damage, 42% chance to cause sleep, +4 Speed modifier, -1 Accuracy",
                6: "TP 12: 214% damage, 44% chance to cause sleep, +4 Speed modifier, +0 Accuracy",
                7: "TP 12: 220% damage, 46% chance to cause sleep, +4 Speed modifier, +0 Accuracy",
                8: "TP 15: 240% damage, 50% chance to cause sleep, +5 Speed modifier, +0 Accuracy",
        },

        WidenCare: {
                1: "TP 15",
                2: "TP 12",
                3: "TP 9",
                4: "TP 6",
        },

        Stretch: {
                1: "20% evasion rate",
                2: "28% evasion rate",
                3: "34% evasion rate",
                4: "40% evasion rate",
                5: "46% evasion rate",
                6: "50% evasion rate",
        },

        FullHeal: {
                1: "TP 34",
                2: "TP 30",
                3: "TP 26",
                4: "TP 20",
        },

        FullRefresh: { 
                1: "TP 16",
                2: "TP 15",
                3: "TP 11",
                4: "TP 8",
        },

        Revive: {
                1: "TP 15: 1 HP recovered",
                2: "TP 15: 20 HP recovered",
                3: "TP 15: 50 HP recovered",
                4: "TP 17: 150 HP recovered",
                5: "TP 17: 180 HP recovered",
                6: "TP 17: 210 HP recovered",
                7: "TP 17: 240 HP recovered",
                8: "TP 20: 350 HP recovered",
        },

        PartyHeal: {
                1: "TP 20: 50% healing power",
                2: "TP 20: 55% healing power",
                3: "TP 20: 60% healing power",
                4: "TP 20: 65% healing power",
                5: "TP 27: 80% healing power",
                6: "TP 27: 83% healing power",
                7: "TP 27: 86% healing power",
                8: "TP 27: 88% healing power",
                9: "TP 27: 90% healing power",
                10: "TP 35: 100% healing power",
        },

        CripplingBlow: { 
                1: "TP 16: 130% damage, 120% damage for subsequent attacks",
                2: "TP 16: 140% damage, 120% damage for subsequent attacks",
                3: "TP 16: 150% damage, 120% damage for subsequent attacks",
                4: "TP 20: 160% damage, 130% damage for subsequent attacks",
                5: "TP 20: 168% damage, 130% damage for subsequent attacks",
                6: "TP 20: 174% damage, 130% damage for subsequent attacks",
                7: "TP 20: 180% damage, 130% damage for subsequent attacks",
                8: "TP 25: 185% damage, 140% damage for subsequent attacks",
        },

        TPBoost: {
                1: "110% Max TP",
                2: "115% Max TP",
                3: "119% Max TP",
                4: "123% Max TP",
                5: "127% Max TP",
                6: "130% Max TP",
        },

        AutoRevive: {
                1: "25% trigger chance, 1 HP recovered",
                2: "25% trigger chance, 10 HP recovered",
                3: "25% trigger chance, 30 HP recovered",
                4: "25% trigger chance, 60 HP recovered",
                5: "25% trigger chance, 100 HP recovered",
                6: "25% trigger chance, 150 HP recovered",
                7: "25% trigger chance, 200 HP recovered",
                8: "25% trigger chance, 250 HP recovered",
        },

        AutoHeal: {
                1: "30% trigger chance, 45% recovery power",
                2: "30% trigger chance, 55% recovery power",
                3: "30% trigger chance, 63% recovery power",
                4: "30% trigger chance, 70% recovery power",
                5: "30% trigger chance, 75% recovery power",
                6: "30% trigger chance, 80% recovery power",
                7: "30% trigger chance, 85% recovery power",
                8: "30% trigger chance, 90% recovery power",
        },
        
        HealMastery: {
                1: "+5% HP recovered",
                3: "+10% HP recovered",
                4: "+15% HP recovered",
                4: "+20% HP recovered",
                5: "+23% HP recovered",
                6: "+26% HP recovered",
                7: "+28% HP recovered",
                8: "+30% HP recovered",
        },
},

Arcanist: {
        NoviceMystic: { 
                1: "5 TP recovered",
        },

        VeteranMystic: {
                1: "8 TP recovered",
        },

        MasterMystic: { 
                1: "10 TP recovered",
        },

        Herbalism: {
                1: "10% chance",
        },

        SkilledCuisine: {
                1: "Food TP bonus/penalty +/- 44%",
                2: "Food TP bonus/penalty +/- 63%",
                3: "Food TP bonus/penalty +/- 77%",
                4: "Food TP bonus/penalty +/- 89%",
                5: "Food TP bonus/penalty +/- 100%",
        },

        StepGuard: { 
                1: "TP 4: 20 steps, 40% damage mitigated",
                2: "TP 4: 40 steps, 60% damage mitigated",
                3: "TP 4: 60 steps, 70% damage mitigated",
                4: "TP 4: 80 steps, 90% damage mitigated",
        },

        SafetyAura: { 
                1: "10% chance to evade",
                2: "15% chance to evade",
                3: "20% chance to evade",
                4: "24% chance to evade",
                5: "27% chance to evade",
                6: "30% chance to evade",
        },

        ArmSealZone: { 
                1: "TP 10: 25% chance to arm bind when used, 15% chance at end of turn",
                2: "TP 10: 27% chance to arm bind when used, 18% chance at end of turn",
                3: "TP 10: 30% chance to arm bind when used, 20% chance at end of turn",
                4: "TP 13: 35% chance to arm bind when used, 25% chance at end of turn",
                5: "TP 13: 37% chance to arm bind when used, 27% chance at end of turn",
                6: "TP 13: 39% chance to arm bind when used, 29% chance at end of turn",
                7: "TP 13: 41% chance to arm bind when used, 31% chance at end of turn",
                8: "TP 16: 45% chance to arm bind when used, 35% chance at end of turn",
        },

        PoisonZone: {
                1: "TP 10: 40% chance to poison when used, 30% chance at end of turn, ~50 damage",
                2: "TP 10: 40% chance to poison when used, 30% chance at end of turn, ~70 damage",
                3: "TP 10: 40% chance to poison when used, 30% chance at end of turn, ~90 damage",
                4: "TP 13: 45% chance to poison when used, 30% chance at end of turn, ~140 damage (if initial cast inflicts it) damage OR ~110 damage (if end of turn cast inflicts it)",
                5: "TP 13: 45% chance to poison when used, 35% chance at end of turn, ~170 damage",
                6: "TP 13: 45% chance to poison when used, 35% chance at end of turn, ~200 damage",
                7: "TP 13: 45% chance to poison when used, 35% chance at end of turn, ~230 damage",
                8: "TP 16: 50% chance to poison when used, 40% chance at end of turn, ~300 damage",
        },

        HealingPower: {
                1: "10% healing power",
                2: "14% healing power",
                3: "18% healing power",
                4: "21% healing power",
                5: "23% healing power",
                6: "25% healing power",
        },

        HealingStroll: { 
                1: "3 HP per step",
                2: "4 HP per step",
                3: "5 HP per step",
                4: "6 HP per step",
                5: "7 HP per step",
                6: "8 HP per step",
                7: "9 HP per step",
                8: "10 HP per step",
        },

        LegSealZone: {
                1: "TP 10: 25% chance to leg bind when used, 15% chance at end of turn",
                2: "TP 10: 27% chance to leg bind when used, 18% chance at end of turn",
                3: "TP 10: 30% chance to leg bind when used, 20% chance at end of turn",
                4: "TP 13: 35% chance to leg bind when used, 25% chance at end of turn",
                5: "TP 13: 37% chance to leg bind when used, 27% chance at end of turn",
                6: "TP 13: 39% chance to leg bind when used, 29% chance at end of turn",
                7: "TP 13: 41% chance to leg bind when used, 31% chance at end of turn",
                8: "TP 16: 45% chance to leg bind when used, 35% chance at end of turn",
        },

        ParalysisZone: {
                1: "TP 10: 25% chance to paralyze when used, 15% chance at end of turn",
                2: "TP 10: 27% chance to paralyze when used, 18% chance at end of turn",
                3: "TP 10: 30% chance to paralyze when used, 20% chance at end of turn",
                4: "TP 13: 35% chance to paralyze when used, 25% chance at end of turn",
                5: "TP 13: 37% chance to paralyze when used, 27% chance at end of turn",
                6: "TP 13: 39% chance to paralyze when used, 29% chance at end of turn",
                7: "TP 13: 41% chance to paralyze when used, 31% chance at end of turn",
                8: "TP 16: 45% chance to paralyze when used, 35% chance at end of turn",
        },

        EvilEyeHamper: { 
                1: "TP 12: enemy deals 90% damage",
                2: "TP 12: enemy deals 85% damage",
                3: "TP 12: enemy deals 82% damage",
                4: "TP 12: enemy deals 80% damage",
        },

        HeadSealZone: {
                1: "TP 10: 25% chance to head bind when used, 15% chance at end of turn",
                2: "TP 10: 27% chance to head bind when used, 18% chance at end of turn",
                3: "TP 10: 30% chance to head bind when used, 20% chance at end of turn",
                4: "TP 13: 35% chance to head bind when used, 25% chance at end of turn",
                5: "TP 13: 37% chance to head bind when used, 27% chance at end of turn",
                6: "TP 13: 39% chance to head bind when used, 29% chance at end of turn",
                7: "TP 13: 41% chance to head bind when used, 31% chance at end of turn",
                8: "TP 16: 45% chance to head bind when used, 35% chance at end of turn",
        },

        HypnoticZone: {
                1: "TP 14: 25% chance to inflict sleep when used, 15% chance at end of turn",
                2: "TP 14: 27% chance to inflict sleep when used, 18% chance at end of turn",
                3: "TP 14: 30% chance to inflict sleep when used, 20% chance at end of turn",
                4: "TP 18: 35% chance to inflict sleep when used, 25% chance at end of turn",
                5: "TP 18: 37% chance to inflict sleep when used, 27% chance at end of turn",
                6: "TP 18: 39% chance to inflict sleep when used, 29% chance at end of turn",
                7: "TP 18: 41% chance to inflict sleep when used, 31% chance at end of turn",
                8: "TP 23: 45% chance to inflict sleep when used, 35% chance at end of turn",
        },

        PositiveEnergy: {
                1: "TP 8: 80% healing power, +3 Speed modifier",
                2: "TP 8: 90% healing power, +3 Speed modifier",
                3: "TP 8: 100% healing power, +3 Speed modifier",
                4: "TP 8: 110% healing power, +3 Speed modifier",
                5: "TP 10: 130% healing power, +4 Speed modifier",
                6: "TP 10: 134% healing power, +4 Speed modifier",
                7: "TP 10: 137% healing power, +4 Speed modifier",
                8: "TP 10: 140% healing power, +5 Speed modifier",
                9: "TP 10: 142% healing power, +5 Speed modifier",
                10: "TP 12: 150% healing power, +5 Speed modifier",
        },

        EvilEyeExpose: {
                1: "TP 12: 115% damage dealt",
                2: "TP 12: 120% damage dealt",
                3: "TP 12: 123% damage dealt",
                4: "TP 12: 125% damage dealt",
        },

        ConfusingZone: {
                1: "TP 20: 17% chance to confuse when used, 12% chance at end of turn",
                2: "TP 20: 19% chance to confuse when used, 14% chance at end of turn",
                3: "TP 20: 21% chance to confuse when used, 16% chance at end of turn",
                4: "TP 25: 25% chance to confuse when used, 20% chance at end of turn",
                5: "TP 25: 27% chance to confuse when used, 22% chance at end of turn",
                6: "TP 25: 29% chance to confuse when used, 24% chance at end of turn",
                7: "TP 25: 31% chance to confuse when used, 26% chance at end of turn",
                8: "TP 30: 35% chance to confuse when used, 30% chance at end of turn",
        },

        NegativeEnergy: {
                1: "TP 3: 80% damage, +3 Speed modifier",
                2: "TP 3: 85% damage, +3 Speed modifier",
                3: "TP 4: 100% damage, +5 Speed modifier",
                4: "TP 4: 104% damage, +5 Speed modifier",
                5: "TP 4: 108% damage, +5 Speed modifier",
                6: "TP 5: 115% damage, +7 Speed modifier",
        },
        
        EffectBoost: {
                1: "+2% to Ailment/Bind/Stun infliction rates",
                2: "+4% to Ailment/Bind/Stun infliction rates",
                3: "+6% to Ailment/Bind/Stun infliction rates",
                4: "+8% to Ailment/Bind/Stun infliction rates",
                5: "+10% to Ailment/Bind/Stun infliction rates",
                6: "+11% to Ailment/Bind/Stun infliction rates",
                7: "+12% to Ailment/Bind/Stun infliction rates",
                8: "+13% to Ailment/Bind/Stun infliction rates",
                9: "+14% to Ailment/Bind/Stun infliction rates",
                10: "+15% to Ailment/Bind/Stun infliction rates",
        },

        ResistReset: {
                1: "TP 70",
                2: "TP 60",
                3: "TP 50",
                4: "TP 40",
        },

        TPReturn: { 
                1: "3 TP recovered",
                2: "6 TP recovered",
                3: "8 TP recovered",
                4: "10 TP recovered",
                5: "11 TP recovered",
                6: "12 TP recovered",
        },

        EnergyCollapse: {
                1: "TP 10: 100% damage, +3 Speed modifier",
                2: "TP 10: 105% damage, +3 Speed modifier",
                3: "TP 12: 120% damage, +5 Speed modifier",
                4: "TP 12: 124% damage, +5 Speed modifier",
                5: "TP 12: 128% damage, +5 Speed modifier",
                6: "TP 14: 135% damage, +7 Speed modifier",
        },
        
        ZoneMastery: {
                1: "At level 8, +30% effect increase",
                2: "At level 8, +36% effect increase",
                3: "At level 8, +41% effect increase",
                4: "At level 8, +45% effect increase",
                5: "At level 8, +48% effect increase",
                6: "At level 8, +50% effect increase",
                7: "At level 8, +53% effect increase",
                8: "At level 8, +56% effect increase",
        },
},

Imperial: {
        NoviceImperial: { 
                1: "Reduce overheating by 1 turn",
        },
        
        VeteralImperial: { 
                1: "Reduce overheating by 2 turn",
        },
        
        MasterImperial: { 
                1: "Reduce overheating by 3 turn",
        },

        Mineralogy: {
                1: "10% chance",
        },

        Conservation: {
                1: "??% chance to not deplete a gathered food spot (effect increases the more party members that have this skill)",
        },

        AttackBoost: { 
                1: "105% physical damage",
                2: "109% physical damage",
                3: "112% physical damage",
                4: "115% physical damage",
                5: "117% physical damage",
                6: "119% physical damage",
                7: "121% physical damage",
                8: "123% physical damage",
        },

        AssaultDrive: { 
                1: "TP 14: 450% damage, +5 Accuracy",
                2: "TP 14: 470% damage, +5 Accuracy",
                3: "TP 14: 490% damage, +5 Accuracy",
                4: "TP 14: 510% damage, +5 Accuracy",
                5: "TP 16: 550% damage, +5 Accuracy",
                6: "TP 16: 565% damage, +5 Accuracy",
                7: "TP 16: 580% damage, +5 Accuracy",
                8: "TP 16: 595% damage, +5 Accuracy",
                9: "TP 16: 610% damage, +0 Accuracy",
                10: "TP 18: 650% damage, +0 Accuracy",
        },

        SharpEdge: { 
                1: "TP 8: 90% damage",
                2: "TP 8: 100% damage",
                3: "TP 9: 130% damage",
                4: "TP 9: 140% damage",
                5: "TP 9: 150% damage",
                6: "TP 10: 170% damage",
        },

        RearGuard: { 
                1: "TP 6: 85% damage taken",
                2: "TP 6: 82% damage taken",
                3: "TP 6: 80% damage taken",
                4: "TP 6: 78% damage taken",
                5: "TP 6: 76% damage taken",
                6: "TP 6: 75% damage taken",
        },

        ForcedHeat: { 
                1: "TP 20: 3 turn reduction",
                2: "TP 18: 3 turn reduction",
                3: "TP 16: 3 turn reduction",
                4: "TP 14: 3 turn reduction",
        },

        ImpulseEdge: { 
                1: "TP 2: 20 TP recovered 150% damage",
                2: "TP 2: 24 TP recovered 155% damage",
                3: "TP 2: 28 TP recovered 160% damage",
                4: "TP 2: 31 TP recovered 165% damage",
                5: "TP 2: 33 TP recovered 170% damage",
                6: "TP 2: 35 TP recovered 175% damage",
        },

        Hawkeye: { 
                1: "TP 6: 120% damage taken by enemy",
                2: "TP 6: 125% damage taken by enemy",
                3: "TP 6: 128% damage taken by enemy",
                4: "TP 6: 130% damage taken by enemy",
        },

        ShockDrive: { 
                1: "TP 16: 550% damage",
                2: "TP 16: 580% damage",
                3: "TP 16: 610% damage",
                4: "TP 18: 670% damage",
                5: "TP 18: 690% damage",
                6: "TP 18: 710% damage",
                7: "TP 18: 730% damage",
                8: "TP 20: 780% damage",
        },

        FreezeDrive: { 
                1: "TP 16: 550% damage",
                2: "TP 16: 580% damage",
                3: "TP 16: 610% damage",
                4: "TP 18: 670% damage",
                5: "TP 18: 690% damage",
                6: "TP 18: 710% damage",
                7: "TP 18: 730% damage",
                8: "TP 20: 780% damage",
        },

        FlameDrive: {
                1: "TP 16: 550% damage",
                2: "TP 16: 580% damage",
                3: "TP 16: 610% damage",
                4: "TP 18: 670% damage",
                5: "TP 18: 690% damage",
                6: "TP 18: 710% damage",
                7: "TP 18: 730% damage",
                8: "TP 20: 780% damage",
        },

        CoolEdge: {
                1: "TP 12: 190% damage",
                2: "TP 12: 220% damage",
                3: "TP 13: 280% damage",
                4: "TP 13: 300% damage",
                5: "TP 13: 320% damage",
                6: "TP 14: 350% damage",
        },

        Converter: { 
                1: "3 TP recovered",
                2: "4 TP recovered",
                3: "5 TP recovered",
                4: "6 TP recovered",
                5: "7 TP recovered",
                6: "8 TP recovered",
        },

        ChargeEdge: {
                1: "12 TP : 260% damage, 220% damage with next attack",
                2: "12 TP : 280% damage, 220% damage with next attack",
                3: "15 TP : 300% damage, 240% damage with next attack",
                4: "15 TP : 315% damage, 240% damage with next attack",
                5: "15 TP : 330% damage, 240% damage with next attack",
                6: "18 TP : 350% damage, 260% damage with next attack",
        },

        DamageBoost: { 
                1: "105% attribute and non-attribute damage dealt",
                2: "109% attribute and non-attribute damage dealt",
                3: "112% attribute and non-attribute damage dealt",
                4: "115% attribute and non-attribute damage dealt",
                5: "117% attribute and non-attribute damage dealt",
                6: "119% attribute and non-attribute damage dealt",
                7: "121% attribute and non-attribute damage dealt",
                8: "123% attribute and non-attribute damage dealt",
        },

        Accelerator: {
                1: "TP 18: 670% damage",
                2: "TP 18: 700% damage",
                3: "TP 18: 730% damage",
                4: "TP 20: 790% damage",
                5: "TP 20: 810% damage",
                6: "TP 20: 830% damage",
                7: "TP 20: 850% damage",
                8: "TP 22: 900% damage",
        },

        Finisher: {
                1: "3 TP recovered",
                2: "4 TP recovered",
                3: "5 TP recovered",
                4: "6 TP recovered",
                5: "7 TP recovered",
                6: "8 TP recovered",
        },

        Ignition: {
                1: "TP 15: 4 overheats needed before usable",
                2: "TP 10: 4 overheats needed before usable",
                3: "TP 5: 4 overheats needed before usable",
                4: "TP 20: 3 overheats needed before usable",
                5: "TP 15: 3 overheats needed before usable",
                6: "TP 10: 3 overheats needed before usable",
                7: "TP 5: 3 overheats needed before usable",
                8: "TP 20: 2 overheats needed before usable",
        },

        DriveMastery: {
                1: "3% increase per overheat",
                2: "6% increase per overheat",
                3: "9% increase per overheat",
                4: "11% increase per overheat",
                5: "12% increase per overheat",
                6: "13% increase per overheat",
                7: "14% increase per overheat",
                8: "15% increase per overheat",
        },

        WideEffect: { 
                1: "20% chance",
                2: "25% chance",
                3: "30% chance",
                4: "34% chance",
                5: "37% chance",
                6: "40% chance",
        },

        Overdrive: { 
                1: "TP 20: 760% damage",
                2: "TP 20: 800% damage",
                3: "TP 20: 830% damage",
                4: "TP 22: 890% damage",
                5: "TP 22: 910% damage",
                6: "TP 22: 930% damage",
                7: "TP 22: 950% damage",
                8: "TP 25: 1000% damage",
        },
},

};


/*
    FILE ARCHIVED ON 12:48:52 Nov 25, 2014 AND RETRIEVED FROM THE
    INTERNET ARCHIVE ON 11:13:04 May 19, 2017.
    JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

    ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
    SECTION 108(a)(3)).
*/
