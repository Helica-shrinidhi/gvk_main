import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { debounce } from '../debounce';


@Component({
  selector: 'app-t-fit',
  templateUrl: './t-fit.component.html',
  styleUrls: ['./t-fit.component.scss']
})
export class TFitComponent implements OnInit, AfterViewInit {
  public current = 0
  private firstDiv;
  private scrollThrottle = false;
  private currentPosition ;
  public isProjectDetailsInView = false;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.firstDiv = document.getElementById("first");
    this.currentPosition = window.pageYOffset;
  }
  public products = [
    { 
      "productName": "T-FIT® CLEAN",
      "productInfo":"T-FIT® Clean is manufactured from Zotefoams ZOTEK® F42 HT LS fine, \
      closed cell foam, the only foam product to be specification tested \
      to FM4910 Clean Room Materials Protocol. The values provided in this \
      Product Information Sheet represent data gathered from random samples\
       of our production of T-FIT® Clean foam and represent typical data. \
       These are given to the best of our knowledge and should be considered \
       as guidance only for selecting a suitable grade for a given application.",
      "productImage": "/assets/t-fit-clean-1.png",
      "productSpec":{
        "property":
        [
          ["Material"], 
          ["Service Temperature"],
            [
              "Thermal Conductivity",
              "Mean temperature of 0 °C",
              "Mean temperature of 25 °C",
              "Mean temperature of 80 °C"
            ],
            [
              "Fire Certification",
              "Euroclass",
              "UL723 / ASTM E84"
            ],
            ["Water Vapour Transmission"],
            ["Outgassing"],
            ["Fungus Resistance"],
            [
              "Factory Mutual 4910 Cleanroom",
              "Materials Flammability Test Protocol"
            ]
          ],
        "testStandard":
        [
          [""],
          ["See Notes Below*"],
          ["ISO 8301"],
          [
            "EN13501-1",
            "Flaming Spread Index @ 25mm",
            "Smoke Developed Index @ 25mm"
          ],
          ["ISO 1663"],
          ["VDI 2083-P17"],
          ["ASTM G21-15"],
          [""]
        ],
        "typicalValue":
        [
          ["Manufactured from an FDA \
          Compliant Kynar® based resin"],
          ["-80 °C to +160 °C"],
          [
            "0.0314 W/m.K",
            "0.0347 W/m.K",
            "0.0434 W/m.K"
          ],
          [
            "B - s1, d0",
            "5",
            "45"
          ],
          ["6500, μ Valu"],
          ["8.86 μg/g"],
          ["Full test complete \
          No signs after 28 days"],
          ["Specification Tested"]
        ]
        
      },
      "productDetail":{
        "productCode":[
          "ZAFCK99930",
          "ZAFCK06381",
          "ZAFCK06382",
          "ZAFCK06383",
          "ZAFCK06384",
          "ZAFCK06385",
          "ZAFCK06386",
          "ZAFCK06387", 
          "ZAFCK06388", 
          "ZAFCK06787", 
          "ZAFCK06522", 
          "ZAFCK99930", 
          "ZAFCK99930-NT", 
          "ZAFCK06381-NT", 
          "ZAFCK06382-NT",
          "ZAFCK06383-NT",
          "ZAFCK06384-NT",
          "ZAFCK06385-NT", 
          "ZAFCK06386-NT", 
          "ZAFCK05880", 
          "ZAFCK05814",
          "ZAFCK05815", 
          "ZAFCK05816", 
          "ZAFCK05615",
          "ZAFCK05616", 
          "ZAFCK05898", 
          "ZAFCK05899", 
          "ZAFCK06878", 
          "ZAFCK06523", 
          "ZAFCK05900", 
          "ZAFCK05743", 
          "ZAFCK05744", 
          "ZAFCK05745", 
          "ZAFCK05746", 
          "ZAFCK05747", 
          "ZAFCK05901", 
          "ZAFCK05902",
        ],
        "description":[
          'ASME BPE 0.25" OD 6.35mm T-FIT Clean Insulating Straight 6.35mm THK',
          'ASME BPE 0.375" OD 9.53mm T-FIT Clean Insulating Straight 6.35mm THK',
          'ASME BPE 0.5" OD 12.70mm T-FIT Clean Insulating Straight 6.35mm THK',
          'ASME BPE 0.75" OD 19.05mm T-FIT Clean Insulating Straight 6.35mm THK',
          'ASME BPE 1.0" OD 25.40mm T-FIT Clean Insulating Straight 6.35mm THK',
          'ASME BPE 1.5" OD 38.10mm T-FIT Clean Insulating Straight 6.35mm THK',
          'ASME BPE 2.0" OD 50.8mm T-FIT Clean Insulating Straight 6.35mm THK',
          'ASME BPE 2.5" OD 63.50mm T-FIT Clean Insulating Straight 6.35mm THK',
          'ASME BPE 3.0" OD 76.20mm T-FIT Clean Insulating Straight 6.35mm THK',
          'ASME BPE 3.5" OD 88.90mm T-FIT Clean Insulating Straight 6.35mm THK',
          'ASME BPE 4.0" OD 101.6mm T-FIT Clean Insulating Straight 6.35mm THK',
          'ASME BPE 0.25" OD 6.35mm T-FIT Clean Insulating Straight 6.35mm THK',
          'ASME BPE 0.25" OD 6.35mm T-FIT Clean Insulating Straight 6.35mm THK (No Tape)',
          'ASME BPE 0.375" OD 9.53mm T-FIT Clean Insulating Straight 6.35mm THK (No Tape)', 
          'ASME BPE 0.5" OD 12.70mm T-FIT Clean Insulating Straight 6.35mm THK (No Tape)' ,
          'ASME BPE 0.75" OD 19.05mm T-FIT Clean Insulating Straight 6.35mm THK (No Tape)' ,
          'ASME BPE 1.0" OD 25.40mm T-FIT Clean Insulating Straight 6.35mm THK (No Tape)' ,
          'ASME BPE 1.5" OD 38.10mm T-FIT Clean Insulating Straight 6.35mm THK (No Tape)' ,
          'ASME BPE 2.0" OD 50.8mm T-FIT Clean Insulating Straight 6.35mm THK (No Tape)' ,
          'ASME BPE 0.375" OD 9.53mm T-FIT Clean Insulating Elbow 6.35mm THK',
          'ASME BPE 0.5" OD 12.70mm T-FIT Clean Insulating Elbow 6.35mm THK' ,
          'ASME BPE 0.75" OD 19.05mm T-FIT Clean Insulating Elbow 6.35mm THK' ,
          'ASME BPE 1.0" OD 25.40mm T-FIT Clean Insulating Elbow 6.35mm THK' ,
          'ASME BPE 1.5" OD 38.10mm T-FIT Clean Insulating Elbow 6.35mm THK' ,
          'ASME BPE 2.0" OD 50.80mm T-FIT Clean Insulating Elbow 6.35mm THK' ,
          'ASME BPE 2.5" OD 63.50mm T-FIT Clean Insulating Elbow 6.35mm THK' ,
          'ASME BPE 3.0" OD 76.20mm T-FIT Clean Insulating Elbow 6.35mm THK' ,
          'ASME BPE 3.5" OD 88.90mm T-FIT Clean Insulating Elbow 6.35mm THK' ,
          'ASME BPE 4.0" OD 101.6mm T-FIT Clean Insulating Elbow 6.35mm THK' ,
          'ASME BPE 0.375" OD 9.53mm T-FIT Clean Insulating Tee 6.35mm THK' ,
          'ASME BPE 0.5" OD 12.70mm T-FIT Clean Insulating Tee 6.35mm THK' ,
          'ASME BPE 0.75" OD 19.05mm T-FIT Clean Insulating Tee 6.35mm THK' ,
          'ASME BPE 1.0" OD 25.40mm T-FIT Clean Insulating Tee 6.35mm THK' ,
          'ASME BPE 1.5" OD 38.10mm T-FIT Clean Insulating Tee 6.35mm THK' ,
          'ASME BPE 2.0" OD 50.80mm T-FIT Clean Insulating Tee 6.35mm THK ',
          'ASME BPE 2.5" OD 63.50mm T-FIT Clean Insulating Tee 6.35mm THK' ,
          'ASME BPE 3.0" OD 76.20mm T-FIT Clean Insulating Tee 6.35mm THK'
        ],
        "InsulationID":{
          "in":[
            '0.25"',
            '0.375"',
            '0.5"',
            '0.75"',
            '1.0"',
            '1.5"',
            '2.0"',
            '2.5"',
            '3.0"',
            '3.5"',
            '4.0"',
            '0.25"',
            '0.25"',
            '0.375"',
            '0.5"',
            '0.75"',
            '1.0"',
            '1.5"',
            '2.0"',
            '0.375"',
            '0.5"',
            '0.75"',
            '1.0"',
            '1.5"',
            '2.0"',
            '2.5"',
            '3.0"',
            '3.5"',
            '4.0"',
            '0.375"',
            '0.5"',
            '0.75"',
            '1.0"',
            '1.5"',
            '2.0"',
            '2.5"',
            '3.0"',
          ],
          "mm":[
            '6.35',
            '9.53',
            '12.70',
            '19.05',
            '25.40',
            '38.10',
            '50.80',
            '63.50',
            '76.20',
            '88.90',
            '101.60',
            '6.35',
            '6.35',
            '9.53',
            '12.70',
            '19.05',
            '25.40',
            '38.10',
            '50.80',
            '9.53',
            '12.70',
            '19.05',
            '25.40',
            '38.10',
            '50.80',
            '63.50',
            '76.20',
            '88.90',
            '101.60',
            '9.53',
            '12.70',
            '19.05',
            '25.40',
            '38.10',
            '50.80',
            '63.50',
            '76.20',
          ]
        },
        "productType":[
          'Straight',
          'Straight',
          'Straight',
          'Straight',
          'Straight',
          'Straight',
          'Straight',
          'Straight',
          'Straight',
          'Straight',
          'Straight',
          'Straight',
          'Straight',
          'Straight',
          'Straight',
          'Straight',
          'Straight',
          'Straight',
          'Straight',
          'Elbow',
          'Elbow',
          'Elbow',
          'Elbow',
          'Elbow',
          'Elbow',
          'Elbow',
          'Elbow',
          'Elbow',
          'Elbow',
          'Tee',
          'Tee',
          'Tee',
          'Tee',
          'Tee',
          'Tee',
          'Tee',
          'Tee',
        ]
      }

    },
    {
      "productName": "T-FIT® PROCESS",
      "productInfo":"T-FIT® Process is manufactured from Zotefoams ZOTEK \
      NB 50 closed cell Nylon foam\
      The values provided in this Product Information Sheet represent data \
      gathered from random samples of our production of T-FIT® Process foam \
      and represent typical data. These are given to the best of our knowledge \
      and should be considered as guidance only for selecting a suitable \
      grade for a given application.",
      "productImage": "/assets/t-fit-process-1.png",
      "productSpec":{
        "property":
        [
          ["Material"], 
          ["Service Temperature"],
            [
              "Thermal Conductivity",
              "Mean temperature of 25 °C",
              "Mean temperature of 170 °C",
            ],
            ["Fungus Resistance"],
            [
              "Fire Certification",
              "Euroclass (Clad Product Only)",
              
            ],
            ["Integral Cladding"],
          ],
        "testStandard":
        [
          [""],
          ["See Notes Below*"],
          ["ISO 8301"],
          [ "ASTM G21-15"],
          ["EN13501-1"],
          [""]
        ],
        "typicalValue":
        [
          ["ZOTEK® N B50",
          "Closed Cell Nylon Foam"],
          ["-20 °C to +200 °C"],
          [
            "0.0361 W/m.K",
            "0.0485 W/m.K"
          ],
          [
            "Full test complete",
            "No signs after 28 days"
          ],
          ["E, EL"],
          ["Alu-PET Composite"],
        ]
        
      },
      "productDetail":{
        "productCode":[
          "TFPS009A06C000-9000",
          "TFPS012A06C000-9001",
          "TFPS019A06C000-9002",
          "TFPS025A06C000-9003",
          "TFPS038A06C000-9004",
          "TFPS050A06C000-9005",
          "TFPS063A06C000-9006",
          "TFPS076A06C000-9007",
          "TFPS101A06C000-9008",
          "TFPS023D06C000-9004",
          "TFPS029D06C000-9005",
          "TFPS036D06C000-9006",
          "TFPS041D06C000-9007",
          "TFPS053D06C000-9008",
          "TFPS070D06C000-9009",
          "TFPS060I06C000-9013",
          "TFPS076I06C000-9014",
          "TFPS021I06C000-9009",
          "TFPS026I06C000-9010",
          "TFPS033I06C000-9011",
          "TFPS048I06C000-9012",
          "TFPS088I06C000-9015"
        ],
        "description":[
          'ASME BPE 0.375" OD 9.53mm T-FIT Process Insulating Straight 6.35mm THK',
          'ASME BPE 0.5" OD 12.70mm T-FIT Process Insulating Straight 6.35mm THK',
          'ASME BPE 0.75" OD 19.05mm T-FIT Process Insulating Straight 6.35mm THK',
          'ASME BPE 1.0" OD 25.40mm T-FIT Process Insulating Straight 6.35mm THK',
          'ASME BPE 1.5" OD 38.10mm T-FIT Process Insulating Straight 6.35mm THK',
          'ASME BPE 2.0" OD 50.80mm T-FIT Process Insulating Straight 6.35mm THK',
          'ASME BPE 2.5" OD 63.50mm T-FIT Process Insulating Straight 6.35mm THK',
          'ASME BPE 3.0" OD 76.20mm T-FIT Process Insulating Straight 6.35mm THK',
          'ASME BPE 4.0" OD 101.60mm T-FIT Process Insulating Straight 6.35mm THK',
          'DIN 11850 DN20 OD 23.00mm T-FIT Process Insulating Straight 6.35mm THK',
          'DIN 11850 DN25 OD 29.00mm T-FIT Process Insulating Straight 6.35mm THK',
          'DIN 11850 DN32 OD 35.00mm T-FIT Process Insulating Straight 6.35mm THK',
          'DIN 11850 DN40 OD 41.00mm T-FIT Process Insulating Straight 6.35mm THK',
          'DIN 11850 DN50 OD 53.00mm T-FIT Process Insulating Straight 6.35mm THK',
          'DIN 11850 DN65 OD 70.00mm T-FIT Process Insulating Straight 6.35mm THK',
          'ISO 1127 DN50 OD 60.3mm T-FIT Process Insulating Straight 6.35mm THK',
          'ISO 1127 DN65 OD 76.1mm T-FIT Process Insulating Straight 6.35mm THK',
          'ISO 1127 DN15 OD 21.3mm T-FIT Process Insulating Straight 6.35mm THK',
          'ISO 1127 DN20 OD 26.9mm T-FIT Process Insulating Straight 6.35mm THK',
          'ISO 1127 DN25 OD 33.7mm T-FIT Process Insulating Straight 6.35mm THK',
          'ISO 1127 DN40 OD 48.3mm T-FIT Process Insulating Straight 6.35mm THK',
          'ISO 1127 DN80 OD 88.9mm T-FIT Process Insulating Straight 6.35mm THK',
        ],
        "InsulationID":{
          "in":[
            '0.375"',
            '0.5"',
            '0.75"',
            '1.0"',
            '1.5"',
            '2.0"',
            '2.5"',
            '3.0"',
            '4.0"',
            'DN20',
            'DN25',
            'DN32',
            'DN40',
            'DN50',
            'DN65',
            'DN50',
            'DN65',
            'DN15',
            'DN20',
            'DN25',
            'DN40',
            'DN80',
          ],
          "mm":[
            '9.53',
            '12.70',
            '19.05',
            '25.40',
            '38.10',
            '50.80',
            '63.50',
            '76.20',
            '101.60',
            '23.00',
            '29.00',
            '35.00',
            '41.00',
            '53.00',
            '70.00',
            '60.30',
            '76.10',
            '21.30',
            '26.90',
            '33.70',
            '48.30',
            '88.90',
          ]
        },
        "productType":[
          'ASME BPE',
          'ASME BPE',
          'ASME BPE',
          'ASME BPE',
          'ASME BPE',
          'ASME BPE',
          'ASME BPE',
          'ASME BPE',
          'ASME BPE',
          'DIN 11850',
          'DIN 11850',
          'DIN 11850',
          'DIN 11850',
          'DIN 11850',
          'DIN 11850',
          'ISO 1127',
          'ISO 1127',
          'ISO 1127',
          'ISO 1127',
          'ISO 1127',
          'ISO 1127',
          'ISO 1127'
        ]
      }
    },
    {
      "productName": "T-FIT® HYGEINE",
      "productInfo":"T-FIT® Hygiene is manufactured from Zotefoams ZOTEK® F43 HT \
       closed cell PVDF foam. \
      The values provided in this Product Information Sheet \
      represent data gathered from random samples of our production of\
       T-FIT® Hygiene foam and represent typical data. These are given \
       to the best of our knowledge and should be considered as guidance \
       only for selecting a suitable grade for a given application.",
      "productImage": "/assets/t-fit-hygiene-1.png",
      "productSpec":{
        "property":
        [
          ["Material"], 
          ["Service Temperature"],
            [
              "Thermal Conductivity",
              "Mean temperature of 25 °C",
              "Mean temperature of 50 °C",
              "Mean temperature of 80 °C"
            ],
            [
              "Fire Certification",
              "Euroclass"
            ],
            ["Water Vapour Transmission"],
            ["Leachable Ions"],
            ["Fungus Resistance"]
          ],
        "testStandard":
        [
          [""],
          ["See Notes Below*"],
          ["ISO 8301"],
          ["EN13501-1"],
          ["ISO 1663"],
          ["ASTM C-871"],
          ["ASTM G21-15"]
        ],
        "typicalValue":
        [
          ["ZOTEK® F43 HT",
          "Closed Cell PVDF Foam"],
          ["-80 °C to +145 °C"],
          [
            "0.0344 W/m.K",
            "0.0370 W/m.K",
            "0.0405 W/m.K"
          ],
          ["C – s2, d0"],
          ["7250, μ Value"],
          ["Pass"],
          [
            "Full test complete",
            "No signs after 28 days"
          ]
        ]
        
      },
      "productDetail":{
        "productCode":[
          'TFHS012A12U000-9001',
          'TFHS012A06U000-9001',
          'TFHS019A12U000-9002',
          'TFHS019A06U000-9002',
          'TFHS025A12U000-9003',
          'TFHS025A06U000-9003',
          'TFHS038A12U000-9004',
          'TFHS038A06U000-9004',
          'TFHS050A12U000-9005',
          'TFHS050A06U000-9005',
          'TFHS063A12U000-9006',
          'TFHS063A06U000-9006',
          'TFHS076A12U000-9007',
          'TFHS076A06U000-9007',
          'TFHS101A12U000-9008',
          'TFHS101A06U000-9008',
          'TFHS021I12U000-9009',
          'TFHS021I06U000-9009',
          'TFHS026I12U000-9010',
          'TFHS026I06U000-9010',
          'TFHS033I12U000-9011',
          'TFHS033I06U000-9011',
          'TFHS048I12U000-9012',
          'TFHS048I06U000-9012',
          'TFHS060I12U000-9013',
          'TFHS060I06U000-9013',
          'TFHS076I12U000-9014',
          'TFHS076I06U000-9014',
          'TFHS088I12U000-9015',
          'TFHS088I06U000-9015',
          'TFHS114I06U000-9016',
          'TFHS023D06U000-9004',
          'TFHS029D06U000-9005',
          'TFHS036D06U000-9006',
          'TFHS041D06U000-9007',
          'TFHS053D06U000-9008',
          'TFHS070D06U000-9009'
        ],
        "description":[
          'ASME BPE 0.5" OD 12.7MM T-FIT Hygiene Insulating Straight 12.7mm THK',
          'ASME BPE 0.5" OD 12.7MM T-FIT Hygiene Insulating Straight 6.35mm THK',
          'ASME BPE 0.75" OD 19.0MM T-FIT Hygiene Insulating Straight 12.7mm THK',
          'ASME BPE 0.75" OD 19.0MM T-FIT Hygiene Insulating Straight 6.35mm THK',
          'ASME BPE 1.0" OD 25.40mm T-FIT Hygiene Insulating Straight 12.70mm THK',
          'ASME BPE 1.0" OD 25.40mm T-FIT Hygiene Insulating Straight 6.35mm THK',
          'ASME BPE 1.5" OD 38.10mm T-FIT Hygiene Insulating Straight 12.70mm THK',
          'ASME BPE 1.5" OD 38.10mm T-FIT Hygiene Insulating Straight 6.35mm THK',
          'ASME BPE 2.0" OD 50.80mm T-FIT Hygiene Insulating Straight 12.70mm THK',
          'ASME BPE 2.0" OD 50.80mm T-FIT Hygiene Insulating Straight 6.35mm THK',
          'ASME BPE 2.5" OD 63.50mm T-FIT Hygiene Insulating Straight 12.70mm THK',
          'ASME BPE 2.5" OD 63.50mm T-FIT Hygiene Insulating Straight 6.35mm THK',
          'ASME BPE 3.0" OD 76.20mm T-FIT Hygiene Insulating Straight 12.70mm THK',
          'ASME BPE 3.0" OD 76.20mm T-FIT Hygiene Insulating Straight 6.35mm THK',
          'ASME BPE 4.0" OD 101.60mm T-FIT Hygiene Insulating Straight 12.70mm THK',
          'ASME BPE 4.0" OD 101.60mm T-FIT Hygiene Insulating Straight 6.35mm THK',
          'ISO 1127 DN15 OD 21.3mm T-FIT Hygiene Insulating Straight 12.7mm THK',
          'ISO 1127 DN15 OD 21.3mm T-FIT Hygiene Insulating Straight 6.35mm THK',
          'ISO 1127 DN20 OD 26.9MM T-FIT Hygiene Insulating Straight 12.7mm THK',
          'ISO 1127 DN20 OD 26.9mm T-FIT Hygiene Insulating Straight 6.35mm THK',
          'ISO 1127 DN25 OD 33.7mm T-FIT Hygiene Insulating Straight 12.7mm THK',
          'ISO 1127 DN25 OD 33.7mm T-FIT Hygiene Insulating Straight 6.35mm THK',
          'ISO 1127 DN40 OD 48.3mm T-FIT Hygiene Insulating Straight 12.7mm THK',
          'ISO 1127 DN40 OD 48.3mm T-FIT Hygiene Insulating Straight 6.35mm THK',
          'ISO 1127 DN50 OD 60.3mm T-FIT Hygiene Insulating Straight 12.7mm THK',
          'ISO 1127 DN50 OD 60.3mm T-FIT Hygiene Insulating Straight 6.35mm THK',
          'ISO 1127 DN65 OD 76.1mm T-FIT Hygiene Insulating Straight 12.7mm THK',
          'ISO 1127 DN65 OD 76.1mm T-FIT Hygiene Insulating Straight 6.35mm THK',
          'ISO 1127 DN80 OD 88.9mm T-FIT Hygiene Insulating Straight 12.7mm THK',
          'ISO 1127 DN80 OD 88.9mm T-FIT Hygiene Insulating Straight 6.35mm THK',
          'ISO 1127 DN100 OD 114.3mm T-FIT Hygiene Insulating Straight 6.35mm THK',
          'DIN 11850 DN20 OD 23.00mm T-FIT Hygiene Insulating Straight 6.35mm THK',
          'DIN 11850 DN25 OD 29.00mm T-FIT Hygiene Insulating Straight 6.35mm THK',
          'DIN 11850 DN32 OD 35.00mm T-FIT Hygiene Insulating Straight 6.35mm THK',
          'DIN 11850 DN40 OD 41.00mm T-FIT Hygiene Insulating Straight 6.35mm THK',
          'DIN 11850 DN50 OD 53.00mm T-FIT Hygiene Insulating Straight 6.35mm THK',
          'DIN 11850 DN65 OD 70.00mm T-FIT Hygiene Insulating Straight 6.35mm THK',
        ],
        "InsulationID":{
          "in":[
            '0.5"',
            '0.5"',
            '0.75"',
            '0.75"',
            '1.0"',
            '1.0"',
            '1.5"',
            '1.5"',
            '2.0"',
            '2.0"',
            '2.5"',
            '2.5"',
            '3.0"',
            '3.0"',
            '4.0"',
            '4.0"',
            'DN15',
            'DN15',
            'DN20',
            'DN20',
            'DN25',
            'DN25',
            'DN40',
            'DN40',
            'DN50',
            'DN50',
            'DN65',
            'DN65',
            'DN80',
            'DN80',
            'DN100',
            'DN20',
            'DN25',
            'DN32',
            'DN40',
            'DN50',
            'DN65'
          ],
          "mm":[
            '12.70',
            '12.70',
            '19.00',
            '19.00',
            '25.40',
            '25.40',
            '38.10',
            '38.10',
            '50.80',
            '50.80',
            '63.50',
            '63.50',
            '76.20',
            '76.20',
            '101.60',
            '101.60',
            '21.30',
            '21.30',
            '26.90',
            '26.90',
            '33.70',
            '33.70',
            '48.30',
            '48.30',
            '60.30',
            '60.30',
            '76.10',
            '76.10',
            '88.90',
            '88.90',
            '114.30',
            '23.00',
            '29.00',
            '35.00',
            '41.00',
            '53.00',
            '70.00'
          ]
        },
        "productType":[
          'ASME BPE',
          'ASME BPE',
          'ASME BPE',
          'ASME BPE',
          'ASME BPE',
          'ASME BPE',
          'ASME BPE',
          'ASME BPE',
          'ASME BPE',
          'ASME BPE',
          'ASME BPE',
          'ASME BPE',
          'ISO 1127',
          'ISO 1127',
          'ISO 1127',
          'ISO 1127',
          'ISO 1127',
          'ISO 1127',
          'ISO 1127',
          'ISO 1127',
          'ISO 1127',
          'ISO 1127',
          'ISO 1127',
          'ISO 1127',
          'ISO 1127',
          'ISO 1127',
          'ISO 1127',
          'ISO 1127',
          'ISO 1127',
          'ISO 1127',
          'ISO 1127',
          'DIN 11850',
          'DIN 11850',
          'DIN 11850',
          'DIN 11850',
          'DIN 11850',
          'DIN 11850'
        ]
      }
    }
    
  ]

  setCurrentProduct(pid){
    this.current = pid;
  }
  @HostListener('window:scroll', ['$event'])
  @debounce()
  smoothScroll(){
  //   let scroll = window.pageYOffset;
  // if (scroll > this.currentPosition) {
  //   this.isProjectDetailsInView = true;
  //   console.log(scroll, this.currentPosition,  "down");
    
  // } else {
  //   this.isProjectDetailsInView = false;
  //   console.log(scroll, this.currentPosition,  "up"); 
  // }
  // this.currentPosition = scroll;
  }

}

