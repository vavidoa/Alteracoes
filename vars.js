
var attacksArray = new Array();
attacksArray[0] = [5, 'Woodland Camo'];
attacksArray[1] = [20, 'Desert Storm Camo'];
attacksArray[2] = [50, 'Anti Social/Urban Camo'];
attacksArray[3] = [100, 'Arctic Camo'];
attacksArray[4] = [250, 'Happy Slapper/Fall Camo'];
attacksArray[5] = [500, 'Scar Maker/Yellow Camo'];
attacksArray[6] = [1000, 'Digital Camo'];
attacksArray[7] = [2000, 'Red Camo'];
attacksArray[8] = [2500, 'Going Postal'];
attacksArray[9] = [3000, 'Blue Camo'];
attacksArray[10] = [4000, 'Orange Camo'];
attacksArray[11] = [5000, 'Pink Camo'];
attacksArray[12] = [10000, 'Somebody Call 911'];

var defendsArray = new Array();
defendsArray[0] = [50, 'Bouncer'];
defendsArray[1] = [250, 'BrickWall'];
defendsArray[2] = [500, 'Turtle'];
defendsArray[3] = [2500, 'Solid as a Rock'];
defendsArray[4] = [10000, 'Fortress'];

var ranAwayArray = new Array();
ranAwayArray[0] = [50, 'Close Escape'];
ranAwayArray[1] = [250, 'Blind Judgement'];
ranAwayArray[2] = [1000, 'Overzealous'];

var foesRanArray = new Array();
foesRanArray[0] = [50, 'Ego Smashing'];
foesRanArray[1] = [250, 'Underestimated'];
foesRanArray[2] = [1000, 'Run Forest Run'];

var killStreakArray = new Array();
killStreakArray[0] = [25, 'Strike'];
killStreakArray[1] = [50, 'Barrage'];
killStreakArray[2] = [100, 'Skirmish'];
killStreakArray[3] = [250, 'Blitzkrieg'];
killStreakArray[4] = [500, 'Onslaught'];

var criticalArray = new Array();
criticalArray[0] = [500, 'Boom Headshot'];
criticalArray[1] = [1000, '50 Cal'];
criticalArray[2] = [2500, 'Pwned in the Face'];
criticalArray[3] = [10000, 'Lee Harvey Oswald'];

var medicalArray = new Array();
medicalArray[0] = [500, 'Pin Cushion'];
medicalArray[1] = [5000, 'Painkiller Abuse'];

var bountiesArray = new Array();
bountiesArray[0] = [25, 'Hired Gun'];
bountiesArray[1] = [100, 'Bone Collector'];
bountiesArray[2] = [250, 'Bounty Hunter'];
bountiesArray[3] = [500, 'Fett'];

var itemsFoundArray = new Array();
itemsFoundArray[0] = [10, 'Watchful'];
itemsFoundArray[1] = [50, 'Finders Keepers'];
itemsFoundArray[2] = [100, 'Eagle Eye'];

var travelArray = new Array();
travelArray[0] = [25, 'Frequent Flyer'];
travelArray[1] = [100, 'Jetlagged/Mile High Club'];
travelArray[2] = [500, 'Mile High Club'];
travelArray[3] = [1000, 'There and Back'];

var arrayVandalism = [[100, 'Sinister Scoundrel'], [200, 'Devious Delinquent'], [300, 'Rebellious Ruffian'], [500, 'Artistic Anarchist'], 
					  [750, 'Renegade Rascal'], [1000, 'Decisive Defacer'], [1500, 'Villainous Vandal'], [2000, 'Menacing Misfit'], 
					  [2500, 'Radical Rebel'], [3000, 'Urban Upsetter'], [4000, 'Malicious Maverick'], [5000, 'Reckless Renovator'], 
					  [6000, 'Dynamic Destructor'], [7500, 'Infernal Instigator'], [10000, 'Nefarious Nihilist']];

var arrayThefts = [[100, 'Petty Pilferer'], [200, 'Crafty Crook'], [300, 'Nifty Nicker'], [500, 'Sneaky Snatcher'], [750, 'Brazen Booster'], 
				   [1000, 'Stealthy Stealer'], [1500, 'Rampant Robber'], [2000, 'Bold Burglar'], [2500, 'Invisible Intruder'], 
				   [3000, 'Lucrative Larcenist'], [4000, 'Looting Luminary'], [5000, 'Formidable Filcher'], [6000,'Sophisticated Swiper'], 
				   [7500, 'Notorious Nabber'], [10000, 'Prolific Plunderer']];

var arrayCounter = [[100, 'Digital Duplicator'], [200, 'Covert Copier'], [300, 'Resourceful Replicator'], [500, 'Mimicking Maestro'], [750, 'Faux Fabricator'], 
					[1000, 'Mock Manufacturer'], [1500, 'Furtive Faker'], [2000, 'Duplicitous Designer'], [2500, 'Counterfeit Crafter'], [3000, 'Emphatic Emulator'], 
					[4000, 'Meticulous Maker'], [5000, 'Artificial Artisan'], [6000, 'Impeccable Imitator'], [7500, 'Bogus Buccaneer'], [10000, 'Famed Forger']];

var arrayFraud = [[100, 'Troublesome Trickster'], [200, 'Shameless Shyster'], [300, 'Greedy Grifter'], [500, 'Daring Deceiver'], [750, 'Provocative Persuader'], 
				  [1000, 'Dexterous Defrauder'], [1500, 'Enterprising Enticer'], [2000, 'Blackhearted Bluffer'], [2500, 'Scheming Scammer'], [3000, 'Swanky Swindler'], 
				  [4000, 'Impressive Imposter'], [5000, 'Canny Conman'], [6000, 'Frenzied Fraudster'], [7500, 'Bankrupting Bilker'], [10000, 'Misdirection Master']];

var arrayIllicit = [[100, 'Underworld Upstart'], [200, 'Murky Middleman'], [300, 'Grievous Goon'], [500, 'Heinous Henchman'], [750, 'Hardworking Heavy'], 
					[1000, 'Intrepid Intermediary'], [1500, 'Crooked Connector'], [2000, 'Belligerent Broker'], [2500, 'Criminal Contractor'], [3000, 'Dark Dealmaker'], 
					[4000, 'Lawless Liaison'], [5000, 'Clandestine Collaborator'], [6000, 'Felonious Facilitator'],	[7500, 'Amoral Arbitrator'], [10000, 'Vice Vendor']];

var arrayCyber = [[100, 'Web Wizard'], [200, 'Digital Desperado'], [300, 'Tech Tinkerer'], [500, 'Virtual Virtuoso'], [750, 'Phishing Phenom'], [1000, 'Network Ninja'], 
				  [1500, 'Expert Exploiter'], [2000, 'Data Dynamo'], [2500, 'Code Commando'], [3000, 'Online Outlaw'], [4000, 'Malware Mogul'], [5000, 'System Saboteur'], 
				  [6000, 'Heinous Hacker'], [7500, 'Backdoor Baron'], [10000, 'Byte Boss']];

var arrayExtortion = [[100, 'Budding Bully'], [200, 'Novice Negotiator'], [300, 'Cunning Coercer'], [500, 'Professional Pressurer'], [750, 'Haughty Harasser'], 
					  [1000, 'Calculating Coaxer'], [1500, 'Exceptional Extortionist'], [2000, 'Polished Persuader'], [2500, 'Effective Enforcer'], 
					  [3000, 'Industrious Intimidator'], [4000, 'Ruthless Racketeer'], [5000, 'Ominous Oppressor'], [6000, 'Vindictive Victimizer'], 
					  [7500, 'Master Manipulator'], [10000, 'Tyrannical Terrorizer']];

var arrayIllegal = [[100, 'Grass Grower'], [200, 'Dope Developer'], [300, 'Seedy Supplier'], [500, 'Blackmarket Botanist'], [750, 'Narcotics Nurturer'], 
					[1000, 'Revered Refiner'], [1500, 'Forbidden Fabricator'], [2000, 'Back-alley Builder'], [2500, 'Contraband Creator'], [3000, 'Covert Craftsman'], 
					[4000, 'Illicit Innovator'], [5000, 'Prohibited Producer'], [6000, 'Workshop Wizard'], [7500, 'Synthetic Scientist'], [10000, 'Production Prodigy']];

var bustAwards = new Array();
bustAwards[0] = [250, 'Novice Buster'];
bustAwards[1] = [500, 'Intermediate Buster'];
bustAwards[2] = [1000, 'Advanced Buster/Bar Breaker'];
bustAwards[3] = [2000, 'Professional Buster'];
bustAwards[4] = [2500, 'Aiding and Abetting'];
bustAwards[5] = [4000, 'Expert Buster'];
bustAwards[6] = [6000, 'Master Buster'];
bustAwards[7] = [8000, 'Guru Buster'];
bustAwards[8] = [10000, 'Don\'t drop It'];

var crimesArray = [[10000, 'Society\'s Worst']];
var revivesArray = [[500, 'Florence Nightingale'], [1000, 'Second Chance']];
var refillsArray = [[250, 'Energize']];
var bazaarArray = [[100, 'Middleman']];
var auctionArray = [[100, 'Bargain Hunter']];
var virusArray = [[100, 'Silicon Valley']];
var dumpArray = [[1000, 'Optimist']];
var trashArray = [[5000, 'Eco Friendly']];
var bailArray = [[500, 'Freedom Isn\'t Free']];
var bountiesMoneyArray = [[100000000, 'Dead or Alive']];
var medicalsStolenArray = [[500, 'I\'m a Real Doctor']];

var respectAwards = new Array();
respectAwards[0] = [100, 'Recruit'];
respectAwards[1] = [500, 'Associate'];
respectAwards[2] = [1000, 'Picciotto'];
respectAwards[3] = [2500, 'Soldier'];
respectAwards[4] = [5000, 'Capo'];
respectAwards[5] = [10000, 'Contabile'];
respectAwards[6] = [25000, 'Consigliere'];

var donatorAwards = new Array();
donatorAwards[0] = [30, 'Citizenship'];
donatorAwards[1] = [100, 'Devoted'];
//donatorAwards[2] = [1000, 'Picciotto'];
//donatorAwards[3] = [1000, 'Picciotto'];
//donatorAwards[4] = [1000, 'Picciotto'];
