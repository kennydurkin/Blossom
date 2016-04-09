$( document ).ready(function() {

//console.log("setting cherries");



	var prunuses = [
		
			[3783, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_50", "326", "116", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3911, "Prunus &#8216;Snow Goose&#8217;", "<em>Prunus</em> ‘Snow Goose’", "prunus_snow_goose", "prunus_snow_goose_147", "130", "478", "Peak Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/snowgoose_BB_26149858936_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/snowgoose_BB_26149858936_first.jpg"],
		
			[3887, "Prunus &#215; sieboldii", "<em>Prunus</em> &#215; <em>sieboldii</em>", "sieboldii", "sieboldii_161", "190", "285", "First Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/sieboldii_first_sm.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/sieboldii_first_sm.jpg"],
		
			[3886, "Prunus &#215; sieboldii", "<em>Prunus</em> &#215; <em>sieboldii</em>", "sieboldii", "sieboldii_160", "193", "307", "First Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/sieboldii_first_sm.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/sieboldii_first_sm.jpg"],
		
			[3885, "Prunus subhirtella", "<em>Prunus subhirtella</em>", "subhirtella", "subhirtella_159", "155", "300", "Peak Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/subhirtella_first_sm.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/subhirtella_first_sm.jpg"],
		
			[3884, "Prunus serrulata &#8216;Ukon&#8217;", "<em>Prunus serrulata</em> ‘Ukon’", "ukon", "ukon_158", "176", "331", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/ukon_first_sm.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/ukon_first_sm.jpg"],
		
			[3883, "Prunus serrulata &#8216;Horinji&#8217;", "<em>Prunus serrulata</em> ‘Horinji’", "horinji", "horinji_157", "428", "212", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/horinji_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/horinji_first.jpg"],
		
			[3882, "Prunus &#215; yedoensis", "<em>Prunus</em> &#215; <em>yedoensis</em>", "yedoensis", "yedoensis_156", "445", "200", "Peak Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/yedoensis_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/yedoensis_first.jpg"],
		
			[3881, "Prunus serrulata &#8216;Ariake&#8217;", "<em>Prunus serrulata</em> ‘Ariake’", "ariake", "ariake_154", "102", "329", "Peak Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/ariake_first_sm.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/ariake_first_sm.jpg"],
		
			[3880, "Prunus &#8216;Shirotae&#8217;", "<em>Prunus</em> ‘Shirotae’", "shirotae", "shirotae_153", "153", "460", "First Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/shirotae_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/shirotae_first.jpg"],
		
			[3879, "Prunus &#8216;Accolade&#8217;", "<em>Prunus</em> ‘Accolade’", "accolade", "accolade_152", "95", "309", "Peak Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/accolade_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/accolade_first.jpg"],
		
			[3878, "Prunus &#8216;Accolade&#8217;", "<em>Prunus</em> ‘Accolade’", "accolade", "accolade_151", "110", "300", "Peak Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/accolade_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/accolade_first.jpg"],
		
			[3877, "Prunus subhirtella &#8216;Pendula&#8217;", "<em>Prunus subhirtella</em> ‘Pendula’", "pendula", "pendula_150", "234", "516", "Peak Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/pendula_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/pendula_first.jpg"],
		
			[3876, "Prunus subhirtella &#8216;Pendula&#8217;", "<em>Prunus subhirtella</em> ‘Pendula’", "pendula", "pendula_149", "208", "502", "Peak Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/pendula_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/pendula_first.jpg"],
		
			[3875, "Prunus subhirtella &#8216;Pendula&#8217;", "<em>Prunus subhirtella</em> ‘Pendula’", "pendula", "pendula_148", "186", "486", "Peak Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/pendula_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/pendula_first.jpg"],
		
			[3873, "Prunus &#8216;Shirotae&#8217;", "<em>Prunus</em> ‘Shirotae’", "shirotae", "shirotae_146", "104", "480", "First Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/shirotae_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/shirotae_first.jpg"],
		
			[3872, "Prunus &#8216;Shirotae&#8217;", "<em>Prunus</em> ‘Shirotae’", "shirotae", "shirotae_145", "82", "480", "First Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/shirotae_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/shirotae_first.jpg"],
		
			[3871, "Prunus &#215; yedoensis", "<em>Prunus</em> &#215; <em>yedoensis</em>", "yedoensis", "yedoensis_144", "74", "462", "Peak Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/yedoensis_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/yedoensis_first.jpg"],
		
			[3870, "Prunus subhirtella &#8216;Pendula&#8217;", "<em>Prunus subhirtella</em> ‘Pendula’", "pendula", "pendula_143", "54", "478", "Peak Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/pendula_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/pendula_first.jpg"],
		
			[3869, "Prunus subhirtella &#8216;Pendula&#8217;", "<em>Prunus subhirtella</em> ‘Pendula’", "pendula", "pendula_142", "34", "466", "Peak Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/pendula_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/pendula_first.jpg"],
		
			[3868, "Prunus &#215; yedoensis", "<em>Prunus</em> &#215; <em>yedoensis</em>", "yedoensis", "yedoensis_141", "398", "408", "Peak Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/yedoensis_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/yedoensis_first.jpg"],
		
			[3867, "Prunus serrulata &#8216;Shogetsu&#8217;", "<em>Prunus serrulata</em> ‘Shogetsu’", "shogetsu", "shogetsu_140", "412", "394", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/shogetsu_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/shogetsu_first.jpg"],
		
			[3866, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_139", "390", "380", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3865, "Prunus &#215; yedoensis", "<em>Prunus</em> &#215; <em>yedoensis</em>", "yedoensis", "yedoensis_138", "398", "360", "Peak Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/yedoensis_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/yedoensis_first.jpg"],
		
			[3864, "Prunus serrulata &#8216;Shogetsu&#8217;", "<em>Prunus serrulata</em> ‘Shogetsu’", "shogetsu", "shogetsu_137", "372", "304", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/shogetsu_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/shogetsu_first.jpg"],
		
			[3863, "Prunus subhirtella &#8216;Pendula&#8217;", "<em>Prunus subhirtella</em> ‘Pendula’", "pendula", "pendula_135", "310", "346", "Peak Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/pendula_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/pendula_first.jpg"],
		
			[3862, "Prunus subhirtella &#8216;Pendula&#8217;", "<em>Prunus subhirtella</em> ‘Pendula’", "pendula", "pendula_132", "285", "390", "Peak Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/pendula_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/pendula_first.jpg"],
		
			[3861, "Prunus subhirtella &#8216;Pendula&#8217;", "<em>Prunus subhirtella</em> ‘Pendula’", "pendula", "pendula_131", "272", "404", "First Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/pendula_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/pendula_first.jpg"],
		
			[3860, "Prunus subhirtella &#8216;Pendula&#8217;", "<em>Prunus subhirtella</em> ‘Pendula’", "pendula", "pendula_130", "254", "410", "Peak Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/pendula_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/pendula_first.jpg"],
		
			[3859, "Prunus subhirtella &#8216;Pendula&#8217;", "<em>Prunus subhirtella</em> ‘Pendula’", "pendula", "pendula_129", "110", "391", "Peak Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/pendula_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/pendula_first.jpg"],
		
			[3858, "Prunus subhirtella &#8216;Pendula&#8217;", "<em>Prunus subhirtella</em> ‘Pendula’", "pendula", "pendula_128", "96", "398", "First Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/pendula_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/pendula_first.jpg"],
		
			[3857, "Prunus subhirtella &#8216;Pendula&#8217;", "<em>Prunus subhirtella</em> ‘Pendula’", "pendula", "pendula_127", "81", "404", "Post-Peak Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/pendula_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/pendula_first.jpg"],
		
			[3856, "Prunus pendula &#8216;Yae-Beni-Shidare&#8217;", "<em>Prunus pendula</em> ‘Yae-Beni-Shidare’", "yae_beni_shidare", "yae_beni_shidare_126", "68", "413", "Peak Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/yaebenishidare_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/yaebenishidare_first.jpg"],
		
			[3855, "Prunus sargentii &#8216;Fudan-zakura&#8217;", "<em>Prunus sargentii</em> ‘Fudan-zakura’", "fudan_zakura", "fudan_zakura_124", "46", "436", "First Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/fudansakura_first_lg.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/fudansakura_first_lg.jpg"],
		
			[3854, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_123", "308", "250", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3853, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_122", "292", "240", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3852, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_121", "277", "230", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3851, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_120", "259", "224", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3850, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_119", "240", "224", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3849, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_118", "221", "226", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3848, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_117", "202", "232", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3847, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_116", "183", "238", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3846, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_115", "164", "244", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3845, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_114", "145", "250", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3844, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_113", "126", "254", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3843, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_112", "107", "256", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3841, "Prunus serrulata &#8216;Taoyame&#8217;", "<em>Prunus serrulata</em> ‘Taoyame’", "taoyame", "taoyame_110", "180", "180", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/taoyame_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/taoyame_first.jpg"],
		
			[3840, "Prunus &#8216;Jugatsu-zakura&#8217;", "<em>Prunus</em> ‘Jugatsu-zakura’", "jugatsu_zakura", "jugatsu_zakura_109", "150", "192", "Post-Peak Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/autumnalis_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/autumnalis_first.jpg"],
		
			[3839, "Prunus serrulata &#8216;Ojochin&#8217;", "<em>Prunus serrulata</em> ‘Ojochin’", "ojochin", "ojochin_108", "140", "178", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/ojochin_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/ojochin_first.jpg"],
		
			[3838, "Prunus sargentii &#8216;Fudan-zakura&#8217;", "<em>Prunus sargentii</em> ‘Fudan-zakura’", "fudan_zakura", "fudan_zakura_107", "131", "192", "Peak Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/fudansakura_first_lg.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/fudansakura_first_lg.jpg"],
		
			[3837, "Prunus serrulata &#8216;Hatazakura&#8217;", "<em>Prunus serrulata</em> ‘Hatazakura’", "hatazakura", "hatazakura_106", "407", "218", "First Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/hatazakura_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/hatazakura_first.jpg"],
		
			[3836, "Prunus &#215; yeodensis &#8216;Akebono&#8217;", "<em>Prunus</em> × <em>yeodensis</em> ‘Akebono’", "akebono", "akebono_105", "387", "222", "Peak Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/akebono_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/akebono_first.jpg"],
		
			[3835, "Prunus subhirtella &#8216;Rosy Cloud&#8217;", "<em>Prunus subhirtella</em> ‘Rosy Cloud’", "rosy_cloud", "rosy_cloud_104", "364", "210", "Peak Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/rosycloud_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/rosycloud_first.jpg"],
		
			[3834, "Prunus &#8216;Shirotae&#8217;", "<em>Prunus</em> ‘Shirotae’", "shirotae", "shirotae_103", "338", "210", "First Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/shirotae_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/shirotae_first.jpg"],
		
			[3833, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_102", "327", "228", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3832, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_101", "307", "216", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3831, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_100", "287", "204", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3830, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_99", "267", "196", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3829, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_98", "247", "193", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3828, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_97", "227", "194", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3827, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_96", "207", "196", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3826, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_95", "187", "202", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3825, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_94", "167", "210", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3824, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_93", "147", "217", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3823, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_92", "127", "224", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3822, "Prunus serrulata &#8216;Kuramayama&#8217;", "<em>Prunus serrulata</em> ‘Kuramayama’", "kuramayama", "kuramayama_91", "460", "184", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kuramayama_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kuramayama_first.jpg"],
		
			[3821, "Prunus &#215; dawyckensis", "<em>Prunus</em> &#215; <em>dawyckensis</em>", "dawyckensis", "dawyckensis_90", "432", "184", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/dawyckensis_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/dawyckensis_first.jpg"],
		
			[3820, "Prunus serrulata &#8216;Taoyame&#8217;", "<em>Prunus serrulata</em> ‘Taoyame’", "taoyame", "taoyame_89", "404", "184", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/taoyame_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/taoyame_first.jpg"],
		
			[3819, "Prunus &#215; hillieri &#8216;Spire&#8217;", "<em>Prunus</em> &#215; <em>hillieri</em> ‘Spire’", "spire", "spire_88", "372", "184", "First Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/spire_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/spire_first.jpg"],
		
			[3818, "Prunus &#8216;Okame&#8217;", "<em>Prunus</em> ‘Okame’", "okame", "okame_87", "344", "184", "Post-Peak Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/okame_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/okame_first.jpg"],
		
			[3817, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_85", "107", "232", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3816, "Prunus &#215; hillieri &#8216;Spire&#8217;", "<em>Prunus</em> &#215; <em>hillieri</em> ‘Spire’", "spire", "spire_83", "107", "190", "First Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/spire_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/spire_first.jpg"],
		
			[3815, "Prunus pendula &#8216;Yae-Beni-Shidare&#8217;", "<em>Prunus pendula</em> ‘Yae-Beni-Shidare’", "yae_beni_shidare", "pendula_82", "107", "18", "First Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/yaebenishidare_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/yaebenishidare_first.jpg"],
		
			[3814, "Prunus pendula &#8216;Yae-Beni-Shidare&#8217;", "<em>Prunus pendula</em> ‘Yae-Beni-Shidare’", "yae_beni_shidare", "pendula_81", "107", "168", "First Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/yaebenishidare_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/yaebenishidare_first.jpg"],
		
			[3813, "Prunus subhirtella &#8216;Pendula&#8217;", "<em>Prunus subhirtella</em> ‘Pendula’", "pendula", "pendula_80", "107", "148", "Post-Peak Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/pendula_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/pendula_first.jpg"],
		
			[3812, "Prunus &#8216;Accolade&#8217;", "<em>Prunus</em> ‘Accolade’", "accolade", "accolade_79", "103", "283", "Peak Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/accolade_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/accolade_first.jpg"],
		
			[3811, "Prunus subhirtella &#8216;Pendula&#8217;", "<em>Prunus subhirtella</em> ‘Pendula’", "pendula", "pendula_78", "107", "0", "First Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/pendula_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/pendula_first.jpg"],
		
			[3810, "Prunus &#8216;Shirotae&#8217;", "<em>Prunus</em> ‘Shirotae’", "shirotae", "shirotae_77", "73", "10", "First Bloom", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/shirotae_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/shirotae_first.jpg"],
		
			[3809, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_76", "452", "136", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3808, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_75", "434", "136", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3807, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_74", "416", "136", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3806, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_73", "398", "136", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3805, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_72", "380", "136", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3804, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_71", "362", "136", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3803, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_70", "344", "136", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3802, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_69", "326", "136", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3801, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_68", "308", "136", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3800, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_67", "290", "136", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3799, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_66", "272", "136", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3798, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_65", "254", "136", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3797, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_64", "236", "136", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3796, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_63", "218", "136", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3795, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_62", "200", "136", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3794, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_61", "182", "136", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3793, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_60", "164", "136", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3792, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_59", "146", "136", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3791, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_58", "128", "136", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3790, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_57", "452", "116", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3789, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_56", "434", "116", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3788, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_55", "416", "116", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3787, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_54", "398", "116", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3786, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_53", "380", "116", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3785, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_52", "362", "116", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3784, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_51", "344", "116", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3782, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_49", "308", "116", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3781, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_48", "290", "116", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3780, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_47", "272", "116", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3779, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_46", "254", "116", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3778, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_45", "236", "116", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3777, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_44", "218", "116", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3776, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_43", "200", "116", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3775, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_42", "182", "116", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3774, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_41", "164", "116", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3773, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_40", "146", "116", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3772, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_39", "128", "116", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3771, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_38", "452", "52", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3770, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_37", "434", "52", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3769, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_36", "416", "52", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3768, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_35", "398", "52", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3767, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_34", "380", "52", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3766, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_33", "362", "52", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3765, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_32", "344", "52", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3764, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_31", "326", "52", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3763, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_30", "308", "52", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3762, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_29", "290", "52", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3761, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_28", "272", "52", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3760, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_27", "254", "52", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3759, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_26", "236", "52", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3758, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_25", "218", "52", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3757, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_24", "200", "52", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3756, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_23", "182", "52", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3755, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_22", "164", "52", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3754, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_21", "146", "52", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3753, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_20", "128", "52", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3752, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_19", "452", "32", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3751, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_18", "434", "32", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3750, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_17", "416", "32", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3749, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_16", "398", "32", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3748, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_15", "380", "32", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3747, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_14", "362", "32", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3746, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_13", "344", "32", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3745, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_12", "326", "32", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3744, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_11", "308", "32", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3743, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_10", "290", "32", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3742, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_9", "272", "32", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3741, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_8", "254", "32", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3740, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_7", "236", "32", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3739, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_6", "218", "32", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3738, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_5", "200", "32", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3737, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_4", "182", "32", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3736, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_3", "164", "32", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3735, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_2", "146", "32", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
			[3734, "Prunus &#8216;Kanzan&#8217;", "<em>Prunus</em> ‘Kanzan’", "kanzan", "kanzan_1", "128", "32", "open", "http://www.bbg.org/img/uploads/cherries/stages/_stages_tooltip/kanzan_first.jpg", "http://www.bbg.org/img/uploads/cherries/stages/_stages_regular/kanzan_first.jpg"],
		
		];


	
	function setCherries(day) {

		for (var i = 0; i < prunuses.length; ++i) {
			cherryMap.apply( 0, prunuses[i] );
		}
	}

	
	function cherryMap( locationNumber, treeName, formattedName, cultivarShortName, shortName, topPos, leftPos, bloomStatus, bloomImageRegular, bloomImageRetina){

		var treeId = shortName;
		var treeMap = document.getElementById( 'cherrymap' );
		
		// make sure the div is empty before we re-create it
		var element = document.getElementById(treeId);
		if (null != element) {element.parentNode.removeChild(element);}
		
		var treeDiv = document.createElement( 'div' );
		var siteVer = window.document.location.host;
		
		treeDiv.setAttribute( 'id', treeId ); 
		treeMap.appendChild( treeDiv );
		
		// set up the icons		
		treeDiv.innerHTML = '<span data-title="' + shortName + '"  alt="' + treeName + '" class="' + shortName + ' location bloom' + getBloomStatus(bloomStatus) + ' tooltip" style="top:' + getRelativeTopPos(topPos) + '%; left:' + getRelativeLeftPos(leftPos) + '%">'
			+ '<span>'
			+ '<a href="/collections/cherry_stages#' + cultivarShortName + '">'
			+ '<h4 class="treename cherry-font">' + formattedName + '</h4>'
			+ '<img srcset="' + bloomImageRegular + ' 1x, ' + bloomImageRetina + ' 2x" ' + ' alt="' + treeName + '"/>'
			+ '<div class="readmore">Learn More &gt;</div></a>'
			+ '</span>' +
			 '</span>';

	}


	function getRelativeTopPos(AbsPos) {
		var pos = (AbsPos * 100)/498;
		return pos.toFixed(2);
	}
	

	function getRelativeLeftPos(AbsPos) {
		var pos = (AbsPos * 100)/550;
		return pos.toFixed(2);
	}
	
		
	function getBloomStatus(bloomStatus) {
		var statuses = ["Prebloom", "First Bloom", "Peak Bloom", "Post-Peak Bloom"]

		if (bloomStatus === undefined || (arguments.length == 0) || (bloomStatus == 0) || (statuses.indexOf(bloomStatus) == -1) ) {
			return 0;
		} else {
			return Number(statuses.indexOf(bloomStatus));
		}
	}

	setCherries();

	$(".tooltip").hover(function() {
		var map = $('#cherrymap');
		var mapBottom = map.offset().top + map.outerHeight(true);
		var mapRight = map.offset().left + map.outerWidth(true);
		
		var myBottom = $(this).offset().top + $(this).find('span').outerHeight();		
		var myRight = $(this).offset().left + $(this).find('span').outerWidth();		
		
		if (myBottom > mapBottom){$(this).find('span').addClass("bottom");} else if (myRight > mapRight) {$(this).find('span').addClass("left");}
		
	});


	// make sure the flexbox reordering kicks in on the mobile version
	if (document.documentElement.clientWidth <= 600) {
		$('section.one-of-two-cols.last-column').contents().appendTo('section.one-of-two-cols.first-column');
		$('section.one-of-two-cols.last-column').detach();
	}
   

});
