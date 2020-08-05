import angle_icon from './unit-conversion-angle-icon.svg';
import degree_illustration from './unit-conversion-angle-illustration-degree.png';
import radian_illustration from './unit-conversion-angle-illustration-radian.gif';
import turn_illustration from './unit-conversion-angle-illustration-turn.png';
import area_icon from './unit-conversion-area-icon.svg';
import hectare_illustration from './unit-conversion-area-illustration-hectare.png';
import astronomy_icon from './unit-conversion-astronomy-icon.svg';
import astronomical_unit_illustration from './unit-conversion-astronomy-illustration-astronomical-unit.png';
import energy_icon from './unit-conversion-energy-icon.svg';
import force_icon from './unit-conversion-force-icon.svg';
import newton_illustration from './unit-conversion-force-illustration-newton.png';
import frequency_icon from './unit-conversion-frequency-icon.svg';
import hertz_illustration from './unit-conversion-frequency-illustration-hertz.gif';
import length_icon from './unit-conversion-length-icon.svg';
import nautical_mile_illustration from './unit-conversion-length-illustration-nautical-mile.png';
import mass_icon from './unit-conversion-mass-icon.svg';
import pressure_icon from './unit-conversion-pressure-icon.svg';
import speed_icon from './unit-conversion-speed-icon.svg';
import temperature_icon from './unit-conversion-temperature-icon.svg';
import time_icon from './unit-conversion-time-icon.svg';
import volume_icon from './unit-conversion-volume-icon.svg';
import liter_illustration from './unit-conversion-volume-illustration-liter.png';

const data = {
  angle: {
    calculator_name: 'Angle',
    plural_form: 'Angles',
    calculator_icon: angle_icon,
    search_terms: ['angle', 'deg', 'degrees', 'degree of arc', 'arc degrees', 'arcmin', 'minute of arc', 'arc minutes', 'arcsec', 'second of arc', 'arc seconds', 'gon', 'gradians', 'rad', 'radians', 'tr', 'pla', 'turns'],
    units: {
      deg: {
        name: 'Degrees',
        conversions: {
          deg: {
            accuracy: '',
            formula: '',
            calculation: function (deg) { return deg }
          },
          arcmin: {
            accuracy: 'exact',
            formula: 'Multiply the angle value by 60',
            calculation: function (deg) { return deg * 60; }
          },
          arcsec: {
            accuracy: 'exact',
            formula: 'Multiply the angle value by 3600',
            calculation: function (deg) { return deg * 3600; }
          },
          gon: {
            accuracy: 'exact',
            formula: 'deg° × 200/180',
            calculation: function (deg) { return deg * 200 / 180; }
          },
          rad: {
            accuracy: 'exact',
            formula: 'deg° × π/180',
            calculation: function (deg) { return deg * Math.PI / 180; }
          },
          tr: {
            accuracy: 'exact',
            formula: 'Divide the angle value by 360',
            calculation: function (deg) { return deg / 360; }
          }
        },
        symbol: '° or deg',
        definition: 'A degree is defined so that a turn is 360 degrees.',
        illustration: degree_illustration,
        wikipedia_page: 'https://en.wikipedia.org/wiki/degree_(angle)'
      },
      arcmin: {
        name: 'Arc Minutes',
        conversions: {
          deg: {
            accuracy: 'exact',
            formula: 'Divide the angle value by 60',
            calculation: function (arcmin) { return arcmin / 60; }
          },
          arcmin: {
            accuracy: '',
            formula: '',
            calculation: function (arcmin) { return arcmin }
          },
          arcsec: {
            accuracy: 'exact',
            formula: 'Multiply the angle value by 60',
            calculation: function (arcmin) { return arcmin * 60; }
          },
          gon: {
            accuracy: 'exact',
            formula: 'Divide the angle value by 54',
            calculation: function (arcmin) { return arcmin / 54; }
          },
          rad: {
            accuracy: 'exact',
            formula: 'deg° × π/(60 × 180)',
            calculation: function (arcmin) { return arcmin * Math.PI / (60 * 180); }
          },
          tr: {
            accuracy: 'exact',
            formula: 'Divide the angle value by 21600',
            calculation: function (arcmin) { return arcmin / 21600; }
          }
        },
        symbol: '\' or arcmin',
        definition: 'A derived unit of the degree. It is defined as 1/60 degree.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/minute_and_second_of_arc'
      },
      arcsec: {
        name: 'Arc Seconds',
        conversions: {
          deg: {
            accuracy: 'exact',
            formula: 'Divide the angle value by 3600',
            calculation: function (arcsec) { return arcsec / 3600; }
          },
          arcmin: {
            accuracy: 'exact',
            formula: 'Divide the angle value by 60',
            calculation: function (arcsec) { return arcsec / 60; }
          },
          arcsec: {
            accuracy: '',
            formula: '',
            calculation: function (arcsec) { return arcsec }
          },
          gon: {
            accuracy: 'exact',
            formula: 'Divide the angle value by 3240',
            calculation: function (arcsec) { return arcsec / 3240; }
          },
          rad: {
            accuracy: 'exact',
            formula: 'deg° × π/(180 × 3600)',
            calculation: function (arcsec) { return arcsec * Math.PI / (180 * 3600); }
          },
          tr: {
            accuracy: 'exact',
            formula: 'Divide the angle value by 1.296e+6',
            calculation: function (arcsec) { return arcsec / 1.296e+6; }
          }
        },
        symbol: '" or arcsec',
        definition: 'A derived unit of the degree. It is defined as 1/3,600 degree or 1/60 arc minute.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/minute_and_second_of_arc'
      },
      gon: {
        name: 'Gradians',
        conversions: {
          deg: {
            accuracy: 'exact',
            formula: 'g × 180/200',
            calculation: function (gon) { return gon * 180 / 200; }
          },
          arcmin: {
            accuracy: 'exact',
            formula: 'Multiply the angle value by 54',
            calculation: function (gon) { return gon * 54; }
          },
          arcsec: {
            accuracy: 'exact',
            formula: 'Multiply the angle value by 3240',
            calculation: function (gon) { return gon * 3240; }
          },
          gon: {
            accuracy: '',
            formula: '',
            calculation: function (gon) { return gon }
          },
          rad: {
            accuracy: 'exact',
            formula: 'g × π/200',
            calculation: function (gon) { return gon * Math.PI / 200; }
          },
          tr: {
            accuracy: 'exact',
            formula: 'Divide the angle value by 400',
            calculation: function (gon) { return gon / 400; }
          }
        },
        symbol: 'ᵍ or gon',
        definition: 'A gradian is defined so that a turn is 400 gradians.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/gradian'
      },
      rad: {
        name: 'Radians',
        conversions: {
          deg: {
            accuracy: 'exact',
            formula: 'rad × 180/π',
            calculation: function (rad) { return rad * (180 / Math.PI); }
          },
          arcmin: {
            accuracy: 'exact',
            formula: 'rad × (60 × 180)/π',
            calculation: function (rad) { return rad * (60 * 180) / Math.PI; }
          },
          arcsec: {
            accuracy: 'exact',
            formula: 'rad × (3600 × 180)/π',
            calculation: function (rad) { return rad * (3600 * 180) / Math.PI; }
          },
          gon: {
            accuracy: 'exact',
            formula: 'rad × 200/π',
            calculation: function (rad) { return rad * (200 / Math.PI); }
          },
          rad: {
            accuracy: '',
            formula: '',
            calculation: function (rad) { return rad }
          },
          tr: {
            accuracy: 'exact',
            formula: 'rad ÷ 2π',
            calculation: function (rad) { return rad / (2 * Math.PI); }
          }
        },
        symbol: 'rad',
        definition: 'A radian is equal to the angle at the center of a circle subtended by an arc whose length equals the radius.',
        illustration: radian_illustration,
        wikipedia_page: 'https://en.wikipedia.org/wiki/radian'
      },
      tr: {
        name: 'Turns',
        conversions: {
          deg: {
            accuracy: 'exact',
            formula: 'Multiply the angle value by 360',
            calculation: function (tr) { return tr * 360; }
          },
          arcmin: {
            accuracy: 'exact',
            formula: 'Multiply the angle value by 21600',
            calculation: function (tr) { return tr * 21600; }
          },
          arcsec: {
            accuracy: 'exact',
            formula: 'Multiply the angle value by 1.296e+6',
            calculation: function (tr) { return tr * 1.296e+6; }
          },
          gon: {
            accuracy: 'exact',
            formula: 'Multiply the angle value by 400',
            calculation: function (tr) { return tr * 400; }
          },
          rad: {
            accuracy: 'exact',
            formula: '2π rad',
            calculation: function (tr) { return tr * 2 * Math.PI; }
          },
          tr: {
            accuracy: '',
            formula: '',
            calculation: function (tr) { return tr }
          }
        },
        symbol: 'tr',
        definition: 'A turn is equal to 2π radians, 360 degrees or 400 gradians.',
        illustration: turn_illustration,
        wikipedia_page: 'https://en.wikipedia.org/wiki/turn_(geometry)'
      }
    }
  },
  area: {
    calculator_name: 'Area',
    plural_form: 'Areas',
    calculator_icon: area_icon,
    search_terms: ['area', 'km2', 'square kilometers', 'm2', 'square meters', 'mi2', 'square miles', 'ft2', 'square feet', 'square foot', 'ha', 'hectares', 'ac', 'acres'],
    units: {
      m2: {
        name: 'Square Meters',
        conversions: {
          km2: {
            accuracy: 'exact',
            formula: 'Divide the area value by 1e+6',
            calculation: function (m2) { return (m2 / 1e+6); }
          },
          m2: {
            accuracy: '',
            formula: '',
            calculation: function (m2) { return m2 }
          },
          mi2: {
            accuracy: 'exact',
            formula: 'Divide the area value by 2.59e+6',
            calculation: function (m2) { return (m2 / 2.59e+6); }
          },
          ft2: {
            accuracy: 'exact',
            formula: 'Multiply the area value by 10.764',
            calculation: function (m2) { return (m2 * 10.764); }
          },
          ha: {
            accuracy: 'exact',
            formula: 'Divide the area value by 10000',
            calculation: function (m2) { return (m2 / 10000); }
          },
          ac: {
            accuracy: 'approximate',
            formula: 'Divide the area value by 4046.856',
            calculation: function (m2) { return (m2 / 4046.856); }
          }
        },
        symbol: 'm²',
        definition: 'The area inside a square with sides equal to 1 meter',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/square_meter'
      },
      ha: {
        name: 'Hectares',
        conversions: {
          km2: {
            accuracy: 'exact',
            formula: 'Divide the area value by 100',
            calculation: function (ha) { return (ha / 100); }
          },
          m2: {
            accuracy: 'exact',
            formula: 'Multiply the area value by 10000',
            calculation: function (ha) { return (ha * 10000); }
          },
          mi2: {
            accuracy: 'approximate',
            formula: 'Divide the area value by 258.999',
            calculation: function (ha) { return (ha / 258.999); }
          },
          ft2: {
            accuracy: 'approximate',
            formula: 'Multiply the area value by 107639.104',
            calculation: function (ha) { return (ha * 107639.104); }
          },
          ha: {
            accuracy: '',
            formula: '',
            calculation: function (ha) { return ha }
          },
          ac: {
            accuracy: 'exact',
            formula: 'Multiply the area value by 2.471',
            calculation: function (ha) { return (ha * 2.471); }
          }
        },
        symbol: 'ha',
        definition: 'The area inside a square with sides equal to 100 meters',
        illustration: hectare_illustration,
        wikipedia_page: 'https://en.wikipedia.org/wiki/hectare'
      },
      km2: {
        name: 'Square Kilometers',
        conversions: {
          km2: {
            accuracy: '',
            formula: '',
            calculation: function (km2) { return km2 }
          },
          m2: {
            accuracy: 'exact',
            formula: 'Multiply the area value by 1e+6',
            calculation: function (km2) { return (km2 * 1e+6); }
          },
          mi2: {
            accuracy: 'exact',
            formula: 'Divide the area value by 2.59',
            calculation: function (km2) { return (km2 / 2.59); }
          },
          ft2: {
            accuracy: 'approximate',
            formula: 'Multiply the area value by 1.076e+7',
            calculation: function (km2) { return (km2 * 1.076e+7); }
          },
          ha: {
            accuracy: 'exact',
            formula: 'Multiply the area value by 100',
            calculation: function (km2) { return (km2 * 100); }
          },
          ac: {
            accuracy: 'approximate',
            formula: 'Multiply the area value by 247.105',
            calculation: function (km2) { return (km2 * 247.105); }
          }
        },
        symbol: 'km²',
        definition: 'The area inside a square with sides equal to 1,000 meters',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/square_kilometer'
      },
      mi2: {
        name: 'Square Miles',
        conversions: {
          km2: {
            accuracy: 'exact',
            formula: 'Multiply the area value by 2.59',
            calculation: function (mi2) { return (mi2 * 2.59); }
          },
          m2: {
            accuracy: 'exact',
            formula: 'Multiply the area value by 2.59e+6',
            calculation: function (mi2) { return (mi2 * 2.59e+6); }
          },
          mi2: {
            accuracy: '',
            formula: '',
            calculation: function (mi2) { return mi2 }
          },
          ft2: {
            accuracy: 'approximate',
            formula: 'Multiply the area value by 2.788e+7',
            calculation: function (mi2) { return (mi2 * 2.788e+7); }
          },
          ha: {
            accuracy: 'approximate',
            formula: 'Multiply the area value by 258.999',
            calculation: function (mi2) { return (mi2 * 258.999); }
          },
          ac: {
            accuracy: 'exact',
            formula: 'Multiply the area value by 640',
            calculation: function (mi2) { return (mi2 * 640); }
          }
        },
        symbol: 'mi²',
        definition: 'The area inside a square with sides equal to 1 mile',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/square_mile'
      },
      ft2: {
        name: 'Square Feet',
        conversions: {
          km2: {
            accuracy: 'approximate',
            formula: 'Divide the area value by 1.076e+7',
            calculation: function (ft2) { return (ft2 / 1.076e+7); }
          },
          m2: {
            accuracy: 'exact',
            formula: 'Divide the area value by 10.764',
            calculation: function (ft2) { return (ft2 / 10.764); }
          },
          mi2: {
            accuracy: 'approximate',
            formula: 'Divide the area value by 2.788e+7',
            calculation: function (ft2) { return (ft2 / 2.788e+7); }
          },
          ft2: {
            accuracy: '',
            formula: '',
            calculation: function (ft2) { return ft2 }
          },
          ha: {
            accuracy: 'approximate',
            formula: 'Divide the area value by 107639.104',
            calculation: function (ft2) { return (ft2 / 107639.104); }
          },
          ac: {
            accuracy: 'exact',
            formula: 'Divide the area value by 43560',
            calculation: function (ft2) { return (ft2 / 43560); }
          }
        },
        symbol: 'ft²',
        definition: 'The area inside a square with sides equal to 1 foot',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/square_foot'
      },
      ac: {
        name: 'Acres',
        conversions: {
          km2: {
            accuracy: 'approximate',
            formula: 'Divide the area value by 247.105',
            calculation: function (ac) { return (ac / 247.105); }
          },
          m2: {
            accuracy: 'approximate',
            formula: 'Multiply the area value by 4046.856',
            calculation: function (ac) { return (ac * 4046.856); }
          },
          mi2: {
            accuracy: 'exact',
            formula: 'Divide the area value by 640',
            calculation: function (ac) { return (ac / 640); }
          },
          ft2: {
            accuracy: 'exact',
            formula: 'Multiply the area value by 43560',
            calculation: function (ac) { return (ac * 43560); }
          },
          ha: {
            accuracy: 'exact',
            formula: 'Divide the area value by 2.471',
            calculation: function (ac) { return (ac / 2.471); }
          },
          ac: {
            accuracy: '',
            formula: '',
            calculation: function (ac) { return ac }
          }
        },
        symbol: 'ac',
        definition: 'Traditionally defined as the area of one chain by one furlong (66 feet by 660 feet), it is equal to 43,560 square feet or ​1/640 square mile.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/acre'
      }
    }
  },
  astronomy: {
    calculator_name: 'Astronomy',
    plural_form: 'Distances',
    calculator_icon: astronomy_icon,
    search_terms: ['astronomy', 'm', 'meters', 'au', 'astronomical units', 'ly', 'light years', 'pc', 'parsecs'],
    units: {
      m: {
        name: 'Meters',
        conversions: {
          m: {
            accuracy: '',
            formula: '',
            calculation: function (m) { return m }
          },
          au: {
            accuracy: 'exact',
            formula: 'Divide the length value by 1.496e+11',
            calculation: function (m) { return (m / 1.496e+11); }
          },
          ly: {
            accuracy: 'approximate',
            formula: 'Divide the length value by 9.461e+15',
            calculation: function (m) { return (m / 9.461e+15); }
          },
          pc: {
            accuracy: 'approximate',
            formula: 'Divide the length value by 3.086e+16',
            calculation: function (m) { return (m / 3.086e+16); }
          }
        },
        symbol: 'm',
        definition: 'The distance light travels in a vacuum in exactly 1/299,792,458 second.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/meter'
      },
      au: {
        name: 'Astronomical Units',
        conversions: {
          m: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 1.496e+11',
            calculation: function (au) { return (au * 1.496e+11); }
          },
          au: {
            accuracy: '',
            formula: '',
            calculation: function (au) { return au }
          },
          ly: {
            accuracy: 'exact',
            formula: 'Divide the length value by 63241.077',
            calculation: function (au) { return (au / 63241.077); }
          },
          pc: {
            accuracy: 'approximate',
            formula: 'Divide the length value by 206264.806',
            calculation: function (au) { return (au / 206264.806); }
          }
        },
        symbol: 'au',
        definition: 'The average of Earth\'s aphelion (the point in the orbit which it is furthest from the sun) and perihelion (the point in the orbit which it is closest to the sun).',
        illustration: astronomical_unit_illustration,
        wikipedia_page: 'https://en.wikipedia.org/wiki/astronomical_unit'
      },
      ly: {
        name: 'Light Years',
        conversions: {
          m: {
            accuracy: 'approximate',
            formula: 'multiply the length value by 9.461e+15',
            calculation: function (ly) { return (ly * 9.461e+15); }
          },
          au: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 63241.077',
            calculation: function (ly) { return (ly * 63241.077); }
          },
          ly: {
            accuracy: '',
            formula: '',
            calculation: function (ly) { return ly }
          },
          pc: {
            accuracy: 'approximate',
            formula: 'Divide the length value by 3.262',
            calculation: function (ly) { return (ly / 3.262); }
          }
        },
        symbol: 'ly',
        definition: 'The distance that light travels in vacuum in 1 Julian year (365.25 days).',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/light-year'
      },
      pc: {
        name: 'Parsecs',
        conversions: {
          m: {
            accuracy: 'approximate',
            formula: 'Multiply the length value by 3.086e+16',
            calculation: function (pc) { return (pc * 3.086e+16); }
          },
          au: {
            accuracy: 'approximate',
            formula: 'Multiply the length value by 206264.806',
            calculation: function (pc) { return (pc * 206264.806); }
          },
          ly: {
            accuracy: 'approximate',
            formula: 'Multiply the length value by 3.262',
            calculation: function (pc) { return (pc * 3.262); }
          },
          pc: {
            accuracy: '',
            formula: '',
            calculation: function (pc) { return pc }
          }
        },
        symbol: 'pc',
        definition: 'The distance at which 1 astronomical unit subtends an angle of 1 arc second.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/parsec'
      }
    }
  },
  energy: {
    calculator_name: 'Energy',
    plural_form: 'Energies',
    calculator_icon: energy_icon,
    search_terms: ['energy', 'j', 'joules', 'kj', 'kilojoules', 'cal', 'calories', 'kcal', 'kilocalories', 'wh', 'watt hours', 'kwh', 'kilowatt hours', 'ev', 'electronvolts', 'but', 'british thermal units', 'thm', 'us therms', 'ftlbf', 'foot-pounds'],
    units: {
      j: {
        name: 'Joules',
        conversions: {
          j: {
            accuracy: '',
            formula: '',
            calculation: function (j) { return j }
          },
          kj: {
            accuracy: 'exact',
            formula: 'Divide the energy value by 1000',
            calculation: function (j) { return (j / 1000); }
          },
          cal: {
            accuracy: 'exact',
            formula: 'Divide the energy value by 4.184',
            calculation: function (j) { return (j / 4.184); }
          },
          kcal: {
            accuracy: 'exact',
            formula: 'Divide the energy value by 4184',
            calculation: function (j) { return (j / 4184); }
          },
          wh: {
            accuracy: 'exact',
            formula: 'Divide the energy value by 3600',
            calculation: function (j) { return (j / 3600); }
          },
          kwh: {
            accuracy: 'exact',
            formula: 'Divide the energy value by 3.6e+6',
            calculation: function (j) { return (j / 3.6e+6); }
          },
          btu: {
            accuracy: 'approximate',
            formula: 'Divide the energy value by 1055.056',
            calculation: function (j) { return (j / 1055.056); }
          },
          ftlbf: {
            accuracy: 'approximate',
            formula: 'Divide the energy value by 1.356',
            calculation: function (j) { return (j / 1.356); }
          }
        },
        symbol: 'J',
        definition: 'The energy transferred upon applying a force of 1 newton through a linear displacement of 1 meter.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/joule'
      },
      kj: {
        name: 'Kilojoules',
        conversions: {
          j: {
            accuracy: 'exact',
            formula: 'Multiply the energy value by 1000',
            calculation: function (kj) { return (kj * 1000); }
          },
          kj: {
            accuracy: '',
            formula: '',
            calculation: function (kj) { return kj }
          },
          cal: {
            accuracy: 'approximate',
            formula: 'Multiply the energy value by 239.006',
            calculation: function (kj) { return (kj * 239.006); }
          },
          kcal: {
            accuracy: 'exact',
            formula: 'Divide the energy value by 4.184',
            calculation: function (kj) { return (kj / 4.184); }
          },
          wh: {
            accuracy: 'exact',
            formula: 'Divide the energy value by 3.6',
            calculation: function (kj) { return (kj / 3.6); }
          },
          kwh: {
            accuracy: 'exact',
            formula: 'Divide the energy value by 3600',
            calculation: function (kj) { return (kj / 3600); }
          },
          btu: {
            accuracy: 'exact',
            formula: 'Divide the energy value by 1.055',
            calculation: function (kj) { return (kj / 1.055); }
          },
          ftlbf: {
            accuracy: 'approximate',
            formula: 'Multiply the energy value by 737.562',
            calculation: function (kj) { return (kj * 737.562); }
          }
        },
        symbol: 'kJ',
        definition: 'A multiple of the joule. It is defined as 1,000 joules.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/joule'
      },
      cal: {
        name: 'Calories',
        conversions: {
          j: {
            accuracy: 'exact',
            formula: 'multiply the energy value by 4.184',
            calculation: function (cal) { return (cal * 4.184); }
          },
          kj: {
            accuracy: 'approximate',
            formula: 'Divide the energy value by 239.006',
            calculation: function (cal) { return (cal / 239.006); }
          },
          cal: {
            accuracy: '',
            formula: '',
            calculation: function (cal) { return cal }
          },
          kcal: {
            accuracy: 'exact',
            formula: 'Divide the energy value by 1000',
            calculation: function (cal) { return (cal / 1000); }
          },
          wh: {
            accuracy: 'approximate',
            formula: 'Divide the energy value by 860.421',
            calculation: function (cal) { return (cal / 860.421); }
          },
          kwh: {
            accuracy: 'exact',
            formula: 'Divide the energy value by 860420.65',
            calculation: function (cal) { return (cal / 860420.65); }
          },
          btu: {
            accuracy: 'approximate',
            formula: 'Divide the energy value by 252.164',
            calculation: function (cal) { return (cal / 252.164); }
          },
          ftlbf: {
            accuracy: 'exact',
            formula: 'Multiply the energy value by 3.086',
            calculation: function (cal) { return (cal * 3.086); }
          }
        },
        symbol: 'cal',
        definition: 'The amount of heat energy needed to raise the temperature of 1 gram of water by 1 °C at a pressure of 1 atmosphere. It is also known as the small calorie.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/calorie'
      },
      kcal: {
        name: 'Kilocalories',
        conversions: {
          j: {
            accuracy: 'exact',
            formula: 'Multiply the energy value by 4184',
            calculation: function (kcal) { return (kcal * 4184); }
          },
          kj: {
            accuracy: 'exact',
            formula: 'Multiply the energy value by 4.184',
            calculation: function (kcal) { return (kcal * 4.184); }
          },
          cal: {
            accuracy: 'exact',
            formula: 'Multiply the energy value by 1000',
            calculation: function (kcal) { return (kcal * 1000); }
          },
          kcal: {
            accuracy: '',
            formula: '',
            calculation: function (kcal) { return kcal }
          },
          wh: {
            accuracy: 'approximate',
            formula: 'Multiply the energy value by 1.162',
            calculation: function (kcal) { return (kcal * 1.162); }
          },
          kwh: {
            accuracy: 'approximate',
            formula: 'Divide the energy value by 860.421',
            calculation: function (kcal) { return (kcal / 860.421); }
          },
          btu: {
            accuracy: 'approximate',
            formula: 'Multiply the energy value by 3.966',
            calculation: function (kcal) { return (kcal * 3.966); }
          },
          ftlbf: {
            accuracy: 'exact',
            formula: 'Multiply the energy value by 3085.96',
            calculation: function (kcal) { return (kcal * 3085.96); }
          }
        },
        symbol: 'kcal',
        definition: 'A multiple of the calorie. It is defined as the amount of heat energy needed to raise the temperature of 1 kilogram of water by 1 °C at a pressure of 1 atmosphere.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/calorie'
      },
      wh: {
        name: 'Watt Hours',
        conversions: {
          j: {
            accuracy: 'exact',
            formula: 'Divide the energy value by 3600',
            calculation: function (wh) { return (wh / 3600); }
          },
          kj: {
            accuracy: 'exact',
            formula: 'Multiply the energy value by 3.6',
            calculation: function (wh) { return (wh * 3.6); }
          },
          cal: {
            accuracy: 'approximate',
            formula: 'Multiply the energy value by 860.421',
            calculation: function (wh) { return (wh * 860.421); }
          },
          kcal: {
            accuracy: 'approximate',
            formula: 'Divide the energy value by 1.162',
            calculation: function (wh) { return (wh / 1.162); }
          },
          wh: {
            accuracy: '',
            formula: '',
            calculation: function (wh) { return wh }
          },
          kwh: {
            accuracy: 'exact',
            formula: 'Divide the energy value by 1000',
            calculation: function (wh) { return (wh / 1000); }
          },
          btu: {
            accuracy: 'approximate',
            formula: 'Multiply the energy value by 3.412',
            calculation: function (wh) { return (wh * 3.412); }
          },
          ftlbf: {
            accuracy: 'approximate',
            formula: 'Multiply the energy value by 2655.224',
            calculation: function (wh) { return (wh * 2655.224); }
          }
        },
        symbol: 'Wh',
        definition: 'The measure of electrical energy equivalent to a power consumption of 1 watt for 1 hour',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/kilowatt_hour'
      },
      kwh: {
        name: 'Kilowatt Hours',
        conversions: {
          j: {
            accuracy: 'exact',
            formula: 'Multiply the energy value by 3.6e+6',
            calculation: function (kwh) { return (kwh * 3.6e+6); }
          },
          kj: {
            accuracy: 'exact',
            formula: 'Multiply the energy value by 3600',
            calculation: function (kwh) { return (kwh * 3600); }
          },
          cal: {
            accuracy: 'exact',
            formula: 'Multiply the energy value by 860420.65',
            calculation: function (kwh) { return (kwh * 860420.65); }
          },
          kcal: {
            accuracy: 'approximate',
            formula: 'Multiply the energy value by 860.421',
            calculation: function (kwh) { return (kwh * 860.421); }
          },
          wh: {
            accuracy: 'exact',
            formula: 'Multiply the energy value by 1000',
            calculation: function (kwh) { return (kwh * 1000); }
          },
          kwh: {
            accuracy: '',
            formula: '',
            calculation: function (kwh) { return kwh }
          },
          btu: {
            accuracy: 'approximate',
            formula: 'Multiply the energy value by 3412.142',
            calculation: function (kwh) { return (kwh * 3412.142); }
          },
          ftlbf: {
            accuracy: 'approximate',
            formula: 'Multiply the energy value by 2.655e+6',
            calculation: function (kwh) { return (kwh * 2.655e+6); }
          }
        },
        symbol: 'kWh',
        definition: 'A multiple of watt hour. It is defined as 1,000 watt hours.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/kilowatt_hour'
      },
      btu: {
        name: 'British Thermal Units',
        conversions: {
          j: {
            accuracy: 'approximate',
            formula: 'Multiply the energy value by 1055.056',
            calculation: function (btu) { return (btu * 1055.056); }
          },
          kj: {
            accuracy: 'exact',
            formula: 'Multiply the energy value by 1.055',
            calculation: function (btu) { return (btu * 1.055); }
          },
          cal: {
            accuracy: 'approximate',
            formula: 'Multiply the energy value by 252.164',
            calculation: function (btu) { return (btu * 252.164); }
          },
          kcal: {
            accuracy: 'approximate',
            formula: 'Divide the energy value by 3.966',
            calculation: function (btu) { return (btu / 3.966); }
          },
          wh: {
            accuracy: 'approximate',
            formula: 'Divide the energy value by 3.412',
            calculation: function (btu) { return (btu / 3.412); }
          },
          kwh: {
            accuracy: 'approximate',
            formula: 'Divide the energy value by 3412.142',
            calculation: function (btu) { return (btu / 3412.142); }
          },
          btu: {
            accuracy: '',
            formula: '',
            calculation: function (btu) { return btu }
          },
          ftlbf: {
            accuracy: 'approximate',
            formula: 'Multiply the energy value by 778.169',
            calculation: function (btu) { return (btu * 778.169); }
          }
        },
        symbol: 'Btu',
        definition: 'The amount of heat energy needed to raise the temperature of 1 pound of water by 1 °F at a pressure of 1 atmosphere.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/british_thermal_unit'
      },
      ftlbf: {
        name: 'Foot-pounds',
        conversions: {
          j: {
            accuracy: 'approximate',
            formula: 'Multiply the energy value by 1.356',
            calculation: function (ftlbf) { return (ftlbf * 1.356); }
          },
          kj: {
            accuracy: 'approximate',
            formula: 'Divide the energy value by 737.562',
            calculation: function (ftlbf) { return (ftlbf / 737.562); }
          },
          cal: {
            accuracy: 'exact',
            formula: 'Divide the energy value by 3.086',
            calculation: function (ftlbf) { return (ftlbf / 3.086); }
          },
          kcal: {
            accuracy: 'exact',
            formula: 'Divide the energy value by 3085.96',
            calculation: function (ftlbf) { return (ftlbf / 3085.96); }
          },
          wh: {
            accuracy: 'approximate',
            formula: 'Divide the energy value by 2655.224',
            calculation: function (ftlbf) { return (ftlbf / 2655.224); }
          },
          kwh: {
            accuracy: 'approximate',
            formula: 'Divide the energy value by 2.655e+6',
            calculation: function (ftlbf) { return (ftlbf / 2.655e+6); }
          },
          btu: {
            accuracy: 'approximate',
            formula: 'Divide the energy value by 778.169',
            calculation: function (ftlbf) { return (ftlbf / 778.169); }
          },
          ftlbf: {
            accuracy: '',
            formula: '',
            calculation: function (ftlbf) { return ftlbf }
          }
        },
        symbol: 'ft⋅lbf',
        definition: 'The energy transferred upon applying a force of 1 pound-force through a linear displacement of 1 foot.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/foot-pound_(energy)'
      }
    }
  },
  force: {
    calculator_name: 'Force',
    plural_form: 'Forces',
    calculator_icon: force_icon,
    search_terms: ['force', 'n', 'newtons', 'lbf', 'pound-forces'],
    units: {
      n: {
        name: 'Newtons',
        conversions: {
          n: {
            accuracy: '',
            formula: '',
            calculation: function (n) { return n }
          },
          lbf: {
            accuracy: 'approximate',
            formula: 'Divide the force value by 4.448',
            calculation: function (n) { return (n / 4.448); }
          }
        },
        symbol: 'N',
        definition: 'The amount of force needed to accelerate 1 kilogram of mass at the rate of 1 meter per second squared.',
        illustration: newton_illustration,
        wikipedia_page: 'https://en.wikipedia.org/wiki/newton_(unit)'
      },
      lbf: {
        name: 'Pound-forces',
        conversions: {
          n: {
            accuracy: 'approximate',
            formula: 'Multiply the force value by 4.448',
            calculation: function (lbf) { return (lbf * 4.448); }
          },
          lbf: {
            accuracy: '',
            formula: '',
            calculation: function (lbf) { return lbf }
          }
        },
        symbol: 'lbf',
        definition: 'The gravitational force exerted on a mass of 1 pound on the surface of Earth.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/pound_(force)'
      },
    }
  },
  frequency: {
    calculator_name: 'Frequency',
    plural_form: 'Frequencies',
    calculator_icon: frequency_icon,
    search_terms: ['frequency', 'hz', 'hertz', 'khz', 'kilohertz', 'mhz', 'megahertz', 'ghz', 'gigahertz'],
    units: {
      hz: {
        name: 'Hertz',
        conversions: {
          hz: {
            accuracy: '',
            formula: '',
            calculation: function (hz) { return hz }
          },
          khz: {
            accuracy: 'exact',
            formula: 'Divide the frequency value by 1000',
            calculation: function (hz) { return (hz / 1000); }
          },
          mhz: {
            accuracy: 'exact',
            formula: 'Divide the frequency value by 1e+6',
            calculation: function (hz) { return (hz / 1e+6); }
          },
          ghz: {
            accuracy: 'exact',
            formula: 'Divide the force value by 1e+9',
            calculation: function (hz) { return (hz / 1e+9); }
          }
        },
        symbol: 'Hz',
        definition: 'The change in state or cycle in a sound wave, alternating current, or other cyclical waveform of 1 cycle per second.',
        illustration: hertz_illustration,
        wikipedia_page: 'https://en.wikipedia.org/wiki/hertz'
      },
      khz: {
        name: 'Kilohertz',
        conversions: {
          hz: {
            accuracy: 'exact',
            formula: 'Multiply the frequency value by 1000',
            calculation: function (khz) { return (khz * 1000); }
          },
          khz: {
            accuracy: '',
            formula: '',
            calculation: function (khz) { return khz }
          },
          mhz: {
            accuracy: 'exact',
            formula: 'Divide the frequency value by 1000',
            calculation: function (khz) { return (khz / 1000); }
          },
          ghz: {
            accuracy: 'exact',
            formula: 'Divide the force value by 1e+6',
            calculation: function (khz) { return (khz / 1e+6); }
          }
        },
        symbol: 'kHz',
        definition: 'A derived unit of the hertz. Equal to 1,000 hertz, or 1,000 cycles per second.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/hertz'
      },
      mhz: {
        name: 'Megahertz',
        conversions: {
          hz: {
            accuracy: 'exact',
            formula: 'Multiply the frequency value by 1e+6',
            calculation: function (mhz) { return (mhz * 1e+6); }
          },
          khz: {
            accuracy: 'exact',
            formula: 'Multiply the frequency value by 1000',
            calculation: function (mhz) { return (mhz * 1000); }
          },
          mhz: {
            accuracy: '',
            formula: '',
            calculation: function (mhz) { return mhz }
          },
          ghz: {
            accuracy: 'exact',
            formula: 'Divide the force value by 1000',
            calculation: function (mhz) { return (mhz / 1000); }
          }
        },
        symbol: 'MHz',
        definition: 'A derived unit of the hertz. Equal to 1,000,000 hertz, or 1,000,000 cycles per second.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/hertz'
      },
      ghz: {
        name: 'Gigahertz',
        conversions: {
          hz: {
            accuracy: 'exact',
            formula: 'Multiply the frequency value by 1e+9',
            calculation: function (ghz) { return (ghz * 1e+9); }
          },
          khz: {
            accuracy: 'exact',
            formula: 'Multiply the frequency value by 1e+6',
            calculation: function (ghz) { return (ghz * 1e+6); }
          },
          mhz: {
            accuracy: 'exact',
            formula: 'Multiply the frequency value by 1000',
            calculation: function (ghz) { return (ghz * 1000); }
          },
          ghz: {
            accuracy: '',
            formula: '',
            calculation: function (ghz) { return ghz }
          }
        },
        symbol: 'GHz',
        definition: 'A derived unit of the hertz. Equal to 1,000,000,000 hertz, or 1,000,000,000 cycles per second.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/hertz'
      }
    }
  },
  length: {
    calculator_name: 'Length',
    plural_form: 'Lengths',
    calculator_icon: length_icon,
    search_terms: ['length', 'km', 'kilometers', 'm', 'meters', 'cm', 'centimeters', 'mm', 'millimeters', 'µm', 'micrometers', 'nm', 'nanometers', 'mi', 'miles', 'yd', 'yards', 'ft', 'foot', 'feet', 'inch', 'inches', 'nmi', 'nautical miles'],
    units: {
      km: {
        name: 'Kilometers',
        conversions: {
          km: {
            accuracy: '',
            formula: '',
            calculation: function (nmi) { return nmi }
          },
          m: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 1000',
            calculation: function (nmi) { return nmi * 1000; }
          },
          cm: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 100000',
            calculation: function (nmi) { return nmi * 100000; }
          },
          mm: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 1e+6',
            calculation: function (nmi) { return nmi * 1e+6; }
          },
          µm: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 1e+9',
            calculation: function (nmi) { return nmi * 1e+9; }
          },
          nm: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 1e+12',
            calculation: function (nmi) { return nmi * 1e+12; }
          },
          mi: {
            accuracy: 'approximate',
            formula: 'Divide the length value by 1.609',
            calculation: function (nmi) { return nmi / 1.609; }
          },
          yd: {
            accuracy: 'approximate',
            formula: 'Multiply the length value by 1093.613',
            calculation: function (nmi) { return nmi * 1093.613; }
          },
          ft: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 3280.84',
            calculation: function (nmi) { return nmi * 3280.84; }
          },
          inch: {
            accuracy: 'approximate',
            formula: 'Multiply the length value by 39370.079',
            calculation: function (nmi) { return nmi * 39370.079; }
          },
          nmi: {
            accuracy: 'exact',
            formula: 'Divide the length value by 1.852',
            calculation: function (nmi) { return nmi / 1.852; }
          }
        },
        symbol: 'km',
        definition: 'A multiple of the meter. It is defined as 1,000 meters.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/kilometer'
      },
      m: {
        name: 'Meters',
        conversions: {
          km: {
            accuracy: 'exact',
            formula: 'Divide the length value by 1000',
            calculation: function (m) { return m / 1000; }
          },
          m: {
            accuracy: '',
            formula: '',
            calculation: function (m) { return m }
          },
          cm: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 100',
            calculation: function (m) { return m * 100; }
          },
          mm: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 1000',
            calculation: function (m) { return m * 1000; }
          },
          µm: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 1e+6',
            calculation: function (m) { return m * 1e+6; }
          },
          nm: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 1e+9',
            calculation: function (m) { return m * 1e+9; }
          },
          mi: {
            accuracy: 'exact',
            formula: 'divide the length value by 1609.344',
            calculation: function (m) { return m / 1609.344; }
          },
          yd: {
            accuracy: 'approximate',
            formula: 'Multiply the length value by 1.094',
            calculation: function (m) { return m * 1.094; }
          },
          ft: {
            accuracy: 'approximate',
            formula: 'Multiply the length value by 3.281',
            calculation: function (m) { return m * 3.281; }
          },
          inch: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 39.37',
            calculation: function (m) { return m * 39.37; }
          },
          nmi: {
            accuracy: 'exact',
            formula: 'Divide the length value by 1852',
            calculation: function (m) { return m / 1852; }
          }
        },
        symbol: 'm',
        definition: 'The length of the path travelled by light in a vacuum in 1/299,792,458 second.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/meter'
      },
      cm: {
        name: 'Centimeters',
        conversions: {
          km: {
            accuracy: 'exact',
            formula: 'divide the length value by 100000',
            calculation: function (cm) { return cm / 100000; }
          },
          m: {
            accuracy: 'exact',
            formula: 'divide the length value by 100',
            calculation: function (cm) { return cm / 100; }
          },
          cm: {
            accuracy: '',
            formula: '',
            calculation: function (cm) { return cm }
          },
          mm: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 10',
            calculation: function (cm) { return cm * 10; }
          },
          µm: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 10000',
            calculation: function (cm) { return cm * 10000; }
          },
          nm: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 1e+7',
            calculation: function (cm) { return cm * 1e+7; }
          },
          mi: {
            accuracy: 'exact',
            formula: 'Divide the length value by 160934.4',
            calculation: function (cm) { return cm / 160934.4; }
          },
          yd: {
            accuracy: 'exact',
            formula: 'Divide the length value by 91.44',
            calculation: function (cm) { return cm / 91.44; }
          },
          ft: {
            accuracy: 'exact',
            formula: 'Divide the length value by 30.48',
            calculation: function (cm) { return cm / 30.48; }
          },
          inch: {
            accuracy: 'exact',
            formula: 'Divide the length value by 2.54',
            calculation: function (cm) { return cm / 2.54; }
          },
          nmi: {
            accuracy: 'exact',
            formula: 'Divide the length value by 185200',
            calculation: function (cm) { return cm / 185200; }
          }
        },
        symbol: 'cm',
        definition: 'A derived unit of the meter. It is defined as 1/100 meter.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/centimeter'
      },
      mm: {
        name: 'Millimeters',
        conversions: {
          km: {
            accuracy: 'exact',
            formula: 'Divide the length value by 1e+6',
            calculation: function (mm) { return mm / 1e+6; }
          },
          m: {
            accuracy: 'exact',
            formula: 'Divide the length value by 1000',
            calculation: function (mm) { return mm / 1000; }
          },
          cm: {
            accuracy: 'exact',
            formula: 'Divide the length value by 10',
            calculation: function (mm) { return mm / 10; }
          },
          mm: {
            accuracy: '',
            formula: '',
            calculation: function (mm) { return mm }
          },
          µm: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 1000',
            calculation: function (mm) { return mm * 1000; }
          },
          nm: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 1e+6',
            calculation: function (mm) { return mm * 1e+6; }
          },
          mi: {
            accuracy: 'approximate',
            formula: 'Divide the length value by 1.609e+6',
            calculation: function (mm) { return mm / 1.609e+6; }
          },
          yd: {
            accuracy: 'exact',
            formula: 'Divide the length value by 914.4',
            calculation: function (mm) { return mm / 914.4; }
          },
          ft: {
            accuracy: 'exact',
            formula: 'Divide the length value by 304.8',
            calculation: function (mm) { return mm / 304.8; }
          },
          inch: {
            accuracy: 'exact',
            formula: 'Divide the length value by 25.4',
            calculation: function (mm) { return mm / 25.4; }
          },
          nmi: {
            accuracy: 'exact',
            formula: 'Divide the length value by 1.852e+6',
            calculation: function (mm) { return mm / 1.852e+6; }
          }
        },
        symbol: 'mm',
        definition: 'A derived unit of the meter. It is defined as 1/1,000 meter.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/millimeter'
      },
      µm: {
        name: 'Micrometers',
        conversions: {
          km: {
            accuracy: 'exact',
            formula: 'Divide the length value by 1e+9',
            calculation: function (µm) { return µm / 1e+9; }
          },
          m: {
            accuracy: 'exact',
            formula: 'Divide the length value by 1e+6',
            calculation: function (µm) { return µm / 1e+6; }
          },
          cm: {
            accuracy: 'exact',
            formula: 'Divide the length value by 10000',
            calculation: function (µm) { return µm / 10000; }
          },
          mm: {
            accuracy: 'exact',
            formula: 'Divide the length value by 1000',
            calculation: function (µm) { return µm / 1000; }
          },
          µm: {
            accuracy: '',
            formula: '',
            calculation: function (µm) { return µm }
          },
          nm: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 1000',
            calculation: function (µm) { return µm * 1000; }
          },
          mi: {
            accuracy: 'approximate',
            formula: 'Divide the length value by 1.609e+9',
            calculation: function (µm) { return µm / 1.609e+9; }
          },
          yd: {
            accuracy: 'exact',
            formula: 'Divide the length value by 914400',
            calculation: function (µm) { return µm / 914400; }
          },
          ft: {
            accuracy: 'exact',
            formula: 'Divide the length value by 304800',
            calculation: function (µm) { return µm / 304800; }
          },
          inch: {
            accuracy: 'exact',
            formula: 'Divide the length value by 25400',
            calculation: function (µm) { return µm / 25400; }
          },
          nmi: {
            accuracy: 'exact',
            formula: 'Divide the length value by 1.852e+9',
            calculation: function (µm) { return µm / 1.852e+9; }
          }
        },
        symbol: 'μm',
        definition: 'A derived unit of the meter. It is defined as 1/1,000,000 meter.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/micrometer'
      },
      nm: {
        name: 'Nanometers',
        conversions: {
          km: {
            accuracy: 'exact',
            formula: 'Divide the length value by 1e+12',
            calculation: function (nm) { return nm / 1e+12; }
          },
          m: {
            accuracy: 'exact',
            formula: 'Divide the length value by 1e+9',
            calculation: function (nm) { return nm / 1e+9; }
          },
          cm: {
            accuracy: 'exact',
            formula: 'Divide the length value by 1e+7',
            calculation: function (nm) { return nm / 1e+7; }
          },
          mm: {
            accuracy: 'exact',
            formula: 'Divide the length value by 1e+6',
            calculation: function (nm) { return nm / 1e+6; }
          },
          µm: {
            accuracy: 'exact',
            formula: 'Divide the length value by 1000',
            calculation: function (nm) { return nm / 1000; }
          },
          nm: {
            accuracy: '',
            formula: '',
            calculation: function (nm) { return nm }
          },
          mi: {
            accuracy: 'approximate',
            formula: 'Divide the length value by 1.609e+12',
            calculation: function (nm) { return nm / 1.609e+12; }
          },
          yd: {
            accuracy: 'exact',
            formula: 'Divide the length value by 9.144e+8',
            calculation: function (nm) { return nm / 9.144e+8; }
          },
          ft: {
            accuracy: 'exact',
            formula: 'Divide the length value by 3.048e+8',
            calculation: function (nm) { return nm / 3.048e+8; }
          },
          inch: {
            accuracy: 'exact',
            formula: 'Divide the length value by 2.54e+7',
            calculation: function (nm) { return nm / 2.54e+7; }
          },
          nmi: {
            accuracy: 'exact',
            formula: 'Divide the length value by 1.852e+12',
            calculation: function (nm) { return nm / 1.852e+12; }
          }
        },
        symbol: 'nm',
        definition: 'A derived unit of the meter. It is defined as 1/1,000,000,000 meter.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/nanometer'
      },
      mi: {
        name: 'Miles',
        conversions: {
          km: {
            accuracy: 'approximate',
            formula: 'Multiply the length value by 1.609',
            calculation: function (mi) { return mi * 1.609; }
          },
          m: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 1609.344',
            calculation: function (mi) { return mi * 1609.344; }
          },
          cm: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 160934.4',
            calculation: function (mi) { return mi * 160934.4; }
          },
          mm: {
            accuracy: 'approximate',
            formula: 'Multiply the length value by 1.609e+6',
            calculation: function (mi) { return mi * 1.609e+6; }
          },
          µm: {
            accuracy: 'approximate',
            formula: 'Multiply the length value by 1.609e+9',
            calculation: function (mi) { return mi * 1.609e+9; }
          },
          nm: {
            accuracy: 'approximate',
            formula: 'Multiply the length value by 1.609e+12',
            calculation: function (mi) { return mi * 1.609e+12; }
          },
          mi: {
            accuracy: '',
            formula: '',
            calculation: function (mi) { return mi }
          },
          yd: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 1760',
            calculation: function (mi) { return mi * 1760; }
          },
          ft: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 5280',
            calculation: function (mi) { return mi * 5280; }
          },
          inch: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 63360',
            calculation: function (mi) { return mi * 63360; }
          },
          nmi: {
            accuracy: 'approximate',
            formula: 'Divide the length value by 1.151',
            calculation: function (mi) { return mi / 1.151; }
          }
        },
        symbol: 'mi',
        definition: '1 mile is equal to 5,280 feet or 1,760 yards.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/mile'
      },
      yd: {
        name: 'Yards',
        conversions: {
          km: {
            accuracy: 'approximate',
            formula: 'Divide the length value by 1093.613',
            calculation: function (yd) { return yd / 1093.613; }
          },
          m: {
            accuracy: 'approximate',
            formula: 'Divide the length value by 1.094',
            calculation: function (yd) { return yd / 1.094; }
          },
          cm: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 91.44',
            calculation: function (yd) { return yd * 91.44; }
          },
          mm: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 914.4',
            calculation: function (yd) { return yd * 914.4; }
          },
          µm: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 914400',
            calculation: function (yd) { return yd * 914400; }
          },
          nm: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 9.144e+8',
            calculation: function (yd) { return yd * 9.144e+8; }
          },
          mi: {
            accuracy: 'exact',
            formula: 'Divide the length value by 1760',
            calculation: function (yd) { return yd / 1760; }
          },
          yd: {
            accuracy: '',
            formula: '',
            calculation: function (yd) { return yd }
          },
          ft: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 3',
            calculation: function (yd) { return yd * 3; }
          },
          inch: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 36',
            calculation: function (yd) { return yd * 36; }
          },
          nmi: {
            accuracy: 'approximate',
            formula: 'Divide the length value by 2025.372',
            calculation: function (yd) { return yd / 2025.372; }
          }
        },
        symbol: 'yd',
        definition: '1 yard is equal to 3 feet or 36 inches.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/yard'
      },
      ft: {
        name: 'Feet',
        conversions: {
          km: {
            accuracy: 'exact',
            formula: 'Divide the length value by 3280.84',
            calculation: function (ft) { return ft / 3280.84; }
          },
          m: {
            accuracy: 'approximate',
            formula: 'Divide the length value by 3.281',
            calculation: function (ft) { return ft / 3.281; }
          },
          cm: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 30.48',
            calculation: function (ft) { return ft * 30.48; }
          },
          mm: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 304.8',
            calculation: function (ft) { return ft * 304.8; }
          },
          µm: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 304800',
            calculation: function (ft) { return ft * 304800; }
          },
          nm: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 3.048e+8',
            calculation: function (ft) { return ft * 3.048e+8; }
          },
          mi: {
            accuracy: 'exact',
            formula: 'Divide the length value by 5280',
            calculation: function (ft) { return ft / 5280; }
          },
          yd: {
            accuracy: 'exact',
            formula: 'Divide the length value by 3',
            calculation: function (ft) { return ft / 3; }
          },
          ft: {
            accuracy: '',
            formula: '',
            calculation: function (ft) { return ft }
          },
          inch: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 12',
            calculation: function (ft) { return ft * 12; }
          },
          nmi: {
            accuracy: 'approximate',
            formula: 'Divide the length value by 6076.115',
            calculation: function (ft) { return ft / 6076.115; }
          }
        },
        symbol: 'ft',
        definition: '1 foot is equal to 12 inches or 1/3 yard.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/foot_(unit)'
      },
      inch: {
        name: 'Inches',
        conversions: {
          km: {
            accuracy: 'approximate',
            formula: 'Divide the length value by 39370.079',
            calculation: function (inch) { return inch / 39370.079; }
          },
          m: {
            accuracy: 'exact',
            formula: 'Divide the length value by 39.37',
            calculation: function (inch) { return inch / 39.37; }
          },
          cm: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 2.54',
            calculation: function (inch) { return inch * 2.54; }
          },
          mm: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 25.4',
            calculation: function (inch) { return inch * 25.4; }
          },
          µm: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 25400;',
            calculation: function (inch) { return inch * 25400; }
          },
          nm: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 2.54e+7',
            calculation: function (inch) { return inch * 2.54e+7; }
          },
          mi: {
            accuracy: 'exact',
            formula: 'Divide the length value by 63360',
            calculation: function (inch) { return inch / 63360; }
          },
          yd: {
            accuracy: 'exact',
            formula: 'Divide the length value by 36',
            calculation: function (inch) { return inch / 36; }
          },
          ft: {
            accuracy: 'exact',
            formula: 'Divide the length value by 12',
            calculation: function (inch) { return inch / 12; }
          },
          inch: {
            accuracy: '',
            formula: '',
            calculation: function (inch) { return inch }
          },
          nmi: {
            accuracy: 'approximate',
            formula: 'Divide the length value by 72913.386',
            calculation: function (inch) { return inch / 72913.386; }
          }
        },
        symbol: 'in',
        definition: '1 inch is ​equal to ​1/12 foot or ​1/36 yard. The exact length has varied in the past, but is now defined as exactly 2.54cm.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/inch'
      },
      nmi: {
        name: 'Nautical Miles',
        conversions: {
          km: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 1.852',
            calculation: function (nmi) { return nmi * 1.852; }
          },
          m: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 1852',
            calculation: function (nmi) { return nmi * 1852; }
          },
          cm: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 185200',
            calculation: function (nmi) { return nmi * 185200; }
          },
          mm: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 1.852e+6',
            calculation: function (nmi) { return nmi * 1.852e+6; }
          },
          µm: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 1.852e+9',
            calculation: function (nmi) { return nmi * 1.852e+9 }
          },
          nm: {
            accuracy: 'exact',
            formula: 'Multiply the length value by 1.852e+12',
            calculation: function (nmi) { return nmi * 1.852e+12; }
          },
          mi: {
            accuracy: 'approximate',
            formula: 'Multiply the length value by 1.151',
            calculation: function (nmi) { return nmi * 1.151; }
          },
          yd: {
            accuracy: 'approximate',
            formula: 'Multiply the length value by 2025.372',
            calculation: function (nmi) { return nmi * 2025.372 }
          },
          ft: {
            accuracy: 'approximate',
            formula: 'Multiply the length value by 6076.115',
            calculation: function (nmi) { return nmi * 6076.115; }
          },
          inch: {
            accuracy: 'approximate',
            formula: 'Multiply the length value by 72913.386',
            calculation: function (nmi) { return nmi * 72913.386; }
          },
          nmi: {
            accuracy: '',
            formula: '',
            calculation: function (nmi) { return nmi }
          }
        },
        symbol: 'nmi',
        definition: 'Equal to 1 arc minute (1/60 degree) of latitude.',
        illustration: nautical_mile_illustration,
        wikipedia_page: 'https://en.wikipedia.org/wiki/nautical_mile'
      },
    }
  },
  mass: {
    calculator_name: 'Mass',
    plural_form: 'Masses',
    calculator_icon: mass_icon,
    search_terms: ['mass', 't', 'metric tons', 'tonnes', 'kg', 'kilograms', 'g', 'grams', 'long tons', 'imperial tons', 'short tons', 'us tons', 'st', 'stones', 'lb', 'pounds', 'oz', 'ounces'],
    units: {
      t: {
        name: 'Metric Ton',
        conversions: {
          t: {
            accuracy: '',
            formula: '',
            calculation: function (t) { return (t); }
          },
          kg: {
            accuracy: 'exact',
            formula: 'Multiply the mass value by 1,000',
            calculation: function (t) { return (t * 1000); }
          },
          g: {
            accuracy: 'exact',
            formula: 'Multiply the mass value by 1e+6',
            calculation: function (t) { return (t * 1e+6); }
          },
          it: {
            accuracy: 'exact',
            formula: 'Divide the mass value by 1.016',
            calculation: function (t) { return (t / 1.016); }
          },
          ust: {
            accuracy: 'approximate',
            formula: 'Multiply the mass value by 1.102',
            calculation: function (t) { return (t * 1.102); }
          },
          st: {
            accuracy: 'exact',
            formula: 'Multiply the mass value by 157.473',
            calculation: function (t) { return (t * 157.473); }
          },
          lb: {
            accuracy: 'approximate',
            formula: 'Multiply the mass value by 2,204.623',
            calculation: function (t) { return (t * 2204.623); }
          },
          oz: {
            accuracy: 'exact',
            formula: 'Multiply the mass value by 35,273.962',
            calculation: function (t) { return (t * 35273.962); }
          }
        },
        symbol: 't',
        definition: 'A multiple of the kilogram. It is defined as 1,000 kilograms, and is equal to the mass of 1,000 liters of water.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/tonne'
      },
      kg: {
        name: 'Kilogram',
        conversions: {
          t: {
            accuracy: 'exact',
            formula: 'Divide the mass value by 1,000',
            calculation: function (kg) { return (kg / 1000); }
          },
          kg: {
            accuracy: '',
            formula: '',
            calculation: function (kg) { return (kg); }
          },
          g: {
            accuracy: 'exact',
            formula: 'Multiply the mass value by 1,000',
            calculation: function (kg) { return (kg * 1000); }
          },
          it: {
            accuracy: 'exact',
            formula: 'Divide the mass value by 1,016.047',
            calculation: function (kg) { return (kg / 1016.047); }
          },
          ust: {
            accuracy: 'approximate',
            formula: 'Divide the mass value by 907.185',
            calculation: function (kg) { return (kg / 907.185); }
          },
          st: {
            accuracy: 'approximate',
            formula: 'Divide the mass value by 6.35',
            calculation: function (kg) { return (kg / 6.35); }
          },
          lb: {
            accuracy: 'approximate',
            formula: 'Multiply the mass value by 2.205',
            calculation: function (kg) { return (kg * 2.205); }
          },
          oz: {
            accuracy: 'exact',
            formula: 'Multiply the mass value by 35.274',
            calculation: function (kg) { return (kg * 35.274); }
          }
        },
        symbol: 'kg',
        definition: 'Equal to the mass of 1 liter of water.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/kilogram'
      },
      g: {
        name: 'Grams',
        conversions: {
          t: {
            accuracy: 'exact',
            formula: 'Divide the mass value by 1e+6',
            calculation: function (g) { return (g / 1e+6); }
          },
          kg: {
            accuracy: 'exact',
            formula: 'Divide the mass value by 1,000',
            calculation: function (g) { return (g / 1000); }
          },
          g: {
            accuracy: '',
            formula: '',
            calculation: function (g) { return (g); }
          },
          it: {
            accuracy: 'exact',
            formula: 'Divide the mass value by 1.016e+6',
            calculation: function (g) { return (g / (1.016e+6)); }
          },
          ust: {
            accuracy: 'exact',
            formula: 'Divide the mass value by 907,184.74',
            calculation: function (g) { return (g / 907184.74); }
          },
          st: {
            accuracy: 'approximate',
            formula: 'Divide the mass value by 6,350.293',
            calculation: function (g) { return (g / 6350.293); }
          },
          lb: {
            accuracy: 'approximate',
            formula: 'Divide the mass value by 453.592',
            calculation: function (g) { return (g / 453.592); }
          },
          oz: {
            accuracy: 'approximate',
            formula: 'Divide the mass value by 28.35',
            calculation: function (g) { return (g / 28.35); }
          }
        },
        symbol: 'g',
        definition: 'A derived unit of the kilogram. It is defined as 1/1,000 kilogram, and is equal to mass of 1 cubic centimeter of water.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/gram'
      },
      it: {
        name: 'Imperial Tons',
        conversions: {
          t: {
            accuracy: 'exact',
            formula: 'Multiply the mass value by 1.016',
            calculation: function (it) { return (it * 1.016); }
          },
          kg: {
            accuracy: 'exact',
            formula: 'Multiply the mass value by 1,016.047',
            calculation: function (it) { return (it * 1016.047); }
          },
          g: {
            accuracy: 'exact',
            formula: 'Multiply the mass value by 1.016e+6',
            calculation: function (it) { return (it * (1.016e+6)); }
          },
          it: {
            accuracy: '',
            formula: '',
            calculation: function (it) { return (it); }
          },
          ust: {
            accuracy: 'exact',
            formula: 'Multiply the mass value by 1.12',
            calculation: function (it) { return (it * 1.12); }
          },
          st: {
            accuracy: 'exact',
            formula: 'Multiply the mass value by 160',
            calculation: function (it) { return (it * 160); }
          },
          lb: {
            accuracy: 'exact',
            formula: 'Multiply the mass value by 2,240',
            calculation: function (it) { return (it * 2240); }
          },
          oz: {
            accuracy: 'exact',
            formula: 'Multiply the mass value by 35,840',
            calculation: function (it) { return (it * 35840); }
          }
        },
        symbol: 'ton',
        definition: 'Equal to 2,240 pounds. Also known as the long ton, it is derived from the traditional British measurement system where 1 long ton is 20 hundredweight, each of which is 8 stone, each of which is 14 pounds.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/long_ton'
      },
      ust: {
        name: 'US Tons',
        conversions: {
          t: {
            accuracy: 'approximate',
            formula: 'Divide the mass value by 1.102',
            calculation: function (lb) { return (lb / 1.102); }
          },
          kg: {
            accuracy: 'approximate',
            formula: 'Multiply the mass value by 907.185',
            calculation: function (lb) { return (lb * 907.185); }
          },
          g: {
            accuracy: 'exact',
            formula: 'Multiply the mass value by 907,184.74',
            calculation: function (lb) { return (lb * 907184.74); }
          },
          it: {
            accuracy: 'exact',
            formula: 'Divide the mass value by 1.12',
            calculation: function (lb) { return (lb / 1.12); }
          },
          ust: {
            accuracy: '',
            formula: '',
            calculation: function (lb) { return (lb); }
          },
          st: {
            accuracy: 'approximate',
            formula: 'Multiply the mass value by 142.857',
            calculation: function (lb) { return (lb * 142.857); }
          },
          lb: {
            accuracy: 'exact',
            formula: 'Multiply the mass value by 2,000',
            calculation: function (lb) { return (lb * 2000); }
          },
          oz: {
            accuracy: 'exact',
            formula: 'Multiply the mass value by 32,000',
            calculation: function (lb) { return (lb * 32000); }
          }
        },
        symbol: 'ton',
        definition: 'Equal to 2,000 pounds. Also known as the short ton, it is most commonly used in the United States where it is known simply as the ton.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/short_ton'
      },
      st: {
        name: 'Stones',
        conversions: {
          t: {
            accuracy: 'exact',
            formula: 'Divide the mass value by 157.473',
            calculation: function (st) { return (st / 157.473); }
          },
          kg: {
            accuracy: 'approximate',
            formula: 'Multiply the mass value by 6.35',
            calculation: function (st) { return (st * 6.35); }
          },
          g: {
            accuracy: 'approximate',
            formula: 'multiply the mass value by 6,350.293',
            calculation: function (st) { return (st * 6350.293); }
          },
          it: {
            accuracy: 'exact',
            formula: 'Divide the mass value by 160',
            calculation: function (st) { return (st / 160); }
          },
          ust: {
            accuracy: 'approximate',
            formula: 'Divide the mass value by 142.857',
            calculation: function (st) { return (st / 142.857); }
          },
          st: {
            accuracy: '',
            formula: '',
            calculation: function (st) { return (st); }
          },
          lb: {
            accuracy: 'exact',
            formula: 'Multiply the mass value by 14',
            calculation: function (st) { return (st * 14); }
          },
          oz: {
            accuracy: 'exact',
            formula: 'Multiply the mass value by 224',
            calculation: function (st) { return (st * 224); }
          }
        },
        symbol: 'st',
        definition: 'Equal to 14 pounds. It is derived from the use of stones for weights, a practice that dates back into antiquity.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/stone_(unit)'
      },
      lb: {
        name: 'Pounds',
        conversions: {
          t: {
            accuracy: 'approximate',
            formula: 'Divide the mass value by 2,204.623',
            calculation: function (ust) { return (ust / 2204.623); }
          },
          kg: {
            accuracy: 'approximate',
            formula: 'Divide the mass value by 2.205',
            calculation: function (ust) { return (ust / 2.205); }
          },
          g: {
            accuracy: 'exact',
            formula: 'Multiply the mass value by 453.592',
            calculation: function (ust) { return (ust * 453.592); }
          },
          it: {
            accuracy: 'exact',
            formula: 'Divide the mass value by 2,240',
            calculation: function (ust) { return (ust / 2240); }
          },
          ust: {
            accuracy: 'exact',
            formula: 'Divide the mass value by 2,000',
            calculation: function (ust) { return (ust / 2000); }
          },
          st: {
            accuracy: 'exact',
            formula: 'Divide the mass value by 14',
            calculation: function (ust) { return (ust / 14); }
          },
          lb: {
            accuracy: '',
            formula: '',
            calculation: function (ust) { return (ust); }
          },
          oz: {
            accuracy: 'exact',
            formula: 'Multiply the mass value by 16',
            calculation: function (ust) { return (ust * 16); }
          }
        },
        symbol: 'lb',
        definition: 'Descending from the Roman libra, various definitions have been used throughout history to facilitate the trade of materials and help regulate the sale of commodities. Today the pound is officially defined as exactly 0.45359237 kilograms.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/pound_(mass)'
      },
      oz: {
        name: 'Ounces',
        conversions: {
          t: {
            accuracy: 'exact',
            formula: 'Divide the mass value by 35,273.962',
            calculation: function (oz) { return (oz / 35273.962); }
          },
          kg: {
            accuracy: 'exact',
            formula: 'Divide the mass value by 35.274',
            calculation: function (oz) { return (oz / 35.274); }
          },
          g: {
            accuracy: 'approximate',
            formula: 'Multiply the mass value by 28.35',
            calculation: function (oz) { return (oz * 28.35); }
          },
          it: {
            accuracy: 'exact',
            formula: 'Divide the mass value by 35,840',
            calculation: function (oz) { return (oz / 35840); }
          },
          ust: {
            accuracy: 'exact',
            formula: 'Divide the mass value by 32,000',
            calculation: function (oz) { return (oz / 32000); }
          },
          st: {
            accuracy: 'exact',
            formula: 'Divide the mass value by 224',
            calculation: function (oz) { return (oz / 224); }
          },
          lb: {
            accuracy: 'exact',
            formula: 'Divide the mass value by 16',
            calculation: function (oz) { return (oz / 16); }
          },
          oz: {
            accuracy: '',
            formula: '',
            calculation: function (oz) { return (oz); }
          }
        },
        symbol: 'oz',
        definition: 'A derived unit of the pound. It is defined as 1/16 pound.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/ounce'
      }
    }
  },
  pressure: {
    calculator_name: 'Pressure',
    plural_form: 'Pressures',
    calculator_icon: pressure_icon,
    search_terms: ['pressure', 'atmospheres', 'bars', 'pascals', 'psi', 'pounds per square inch', 'torr'],
    units: {
      atm: {
        name: 'Atmospheres',
        conversions: {
          atm: {
            accuracy: '',
            formula: '',
            calculation: function (atm) { return (atm); }
          },
          bar: {
            accuracy: 'approximate',
            formula: 'Multiply the pressure value by 1.013',
            calculation: function (atm) { return (atm * 1.013); }
          },
          pa: {
            accuracy: 'exact',
            formula: 'Multiply the pressure value by 101,325',
            calculation: function (atm) { return (atm * 101325); }
          },
          psi: {
            accuracy: 'exact',
            formula: 'Multiply the pressure value by 14.696',
            calculation: function (atm) { return (atm * 14.696); }
          },
          torr: {
            accuracy: 'exact',
            formula: 'Multiply the pressure value by 760',
            calculation: function (atm) { return (atm * 760); }
          }
        },
        symbol: 'atm',
        definition: 'The pressure exerted by 760 millimeters of mercury at 0 °C and standard gravity.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/atmosphere_(unit)'
      },
      bar: {
        name: 'Bars',
        conversions: {
          atm: {
            accuracy: 'approximate',
            formula: 'Divide the pressure value by 1.013',
            calculation: function (bar) { return (bar / 1.013); }
          },
          bar: {
            accuracy: '',
            formula: '',
            calculation: function (bar) { return (bar); }
          },
          pa: {
            accuracy: 'exact',
            formula: 'Multiply the pressure value by 100,000',
            calculation: function (bar) { return (bar * 100000); }
          },
          psi: {
            accuracy: 'approximate',
            formula: 'Multiply the pressure value by 14.504',
            calculation: function (bar) { return (bar * 14.504); }
          },
          torr: {
            accuracy: 'approximate',
            formula: 'multiply the pressure value by 750.062',
            calculation: function (bar) { return (bar * 750.062); }
          }
        },
        symbol: 'bar',
        definition: 'The pressure exerted by a force of 100,000 newtons upon an area of 1 square meter. Equal to 100,000 pascals.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/bar_(unit)'
      },
      pa: {
        name: 'Pascals',
        conversions: {
          atm: {
            accuracy: 'exact',
            formula: 'Divide the pressure value by 101,325',
            calculation: function (pa) { return (pa / 101325); }
          },
          bar: {
            accuracy: 'exact',
            formula: 'Divide the pressure value by 100,000',
            calculation: function (pa) { return (pa / 100000); }
          },
          pa: {
            accuracy: '',
            formula: '',
            calculation: function (pa) { return (pa); }
          },
          psi: {
            accuracy: 'approximate',
            formula: 'Divide the pressure value by 6,894.757',
            calculation: function (pa) { return (pa / 6894.757); }
          },
          torr: {
            accuracy: 'approximate',
            formula: 'Divide the pressure value by 133.322',
            calculation: function (pa) { return (pa / 133.322); }
          }
        },
        symbol: 'Pa',
        definition: 'The pressure exerted by a force of 1 newton upon an area of 1 square meter.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/pascal_(unit)'
      },
      psi: {
        name: 'Pounds per Square Inch',
        conversions: {
          atm: {
            accuracy: 'exact',
            formula: 'divide the pressure value by 14.696',
            calculation: function (psi) { return (psi / 14.696); }
          },
          bar: {
            accuracy: 'approximate',
            formula: 'divide the pressure value by 14.504',
            calculation: function (psi) { return (psi / 14.504); }
          },
          pa: {
            accuracy: 'approximate',
            formula: 'Multiply the pressure value by 6,894.757',
            calculation: function (psi) { return (psi * 6894.757); }
          },
          psi: {
            accuracy: '',
            formula: '',
            calculation: function (psi) { return (psi); }
          },
          torr: {
            accuracy: 'exact',
            formula: 'Multiply the pressure value by 51.715',
            calculation: function (psi) { return (psi * 51.715); }
          }
        },
        symbol: 'psi',
        definition: 'The pressure exerted by a force of 1 pound-force upon an area of 1 square inch.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/pounds_per_square_inch'
      },
      torr: {
        name: 'Torr',
        conversions: {
          atm: {
            accuracy: 'exact',
            formula: 'Divide the pressure value by 760',
            calculation: function (torr) { return (torr / 760); }
          },
          bar: {
            accuracy: 'approximate',
            formula: 'Divide the pressure value by 750.062',
            calculation: function (torr) { return (torr / 750.062); }
          },
          pa: {
            accuracy: 'approximate',
            formula: 'Multiply the pressure value by 133.322',
            calculation: function (torr) { return (torr * 133.322); }
          },
          psi: {
            accuracy: 'approximate',
            formula: 'Divide the pressure value by 51.715',
            calculation: function (torr) { return (torr / 51.715); }
          },
          torr: {
            accuracy: '',
            formula: '',
            calculation: function (torr) { return (torr); }
          }
        },
        symbol: 'Torr',
        definition: 'The pressure exerted by 1 millimeter of mercury at 0 °C and standard gravity. Equal to 1/760 atmosphere.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/torr'
      }
    }
  },
  speed: {
    calculator_name: 'Speed',
    plural_form: 'Speeds',
    calculator_icon: speed_icon,
    search_terms: ['speed', 'kmh', 'kilometers per hour', 'ms', 'meters per second', 'mph', 'miles per hour', 'fts', 'feet per second', 'knots', 'nautical miles per hour'],
    units: {
      kmh: {
        name: 'Kilometers per Hour',
        conversions: {
          kmh: {
            accuracy: '',
            formula: '',
            calculation: function (kmh) { return kmh }
          },
          ms: {
            accuracy: 'exact',
            formula: 'Divide the speed value by 3.6',
            calculation: function (kmh) { return kmh / 3.6 }
          },
          mph: {
            accuracy: 'approximate',
            formula: 'Divide the speed value by 1.609',
            calculation: function (kmh) { return kmh / 1.609 }
          },
          fts: {
            accuracy: 'approximate',
            formula: 'Divide the speed value by 1.097',
            calculation: function (kmh) { return kmh / 1.097 }
          },
          knots: {
            accuracy: 'exact',
            formula: 'Divide the speed value by 1.852',
            calculation: function (kmh) { return kmh / 1.852 }
          }
        },
        symbol: 'km/h',
        definition: 'The number of kilometers traveled in 1 hour.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/kilometers_per_hour'
      },
      ms: {
        name: 'Meters per Second',
        conversions: {
          kmh: {
            accuracy: 'exact',
            formula: 'Multiply the speed value by 3.6',
            calculation: function (ms) { return ms * 3.6 }
          },
          ms: {
            accuracy: '',
            formula: '',
            calculation: function (ms) { return ms }
          },
          mph: {
            accuracy: 'exact',
            formula: 'Multiply the speed value by 2.237',
            calculation: function (ms) { return ms * 2.237 }
          },
          fts: {
            accuracy: 'approximate',
            formula: 'Multiply the speed value by 3.281',
            calculation: function (ms) { return ms * 3.281 }
          },
          knots: {
            accuracy: 'approximate',
            formula: 'Multiply the speed value by 1.944',
            calculation: function (ms) { return ms * 1.944 }
          }
        },
        symbol: 'm/s',
        definition: 'The distance in meters divided by time in seconds.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/meter_per_second'
      },
      mph: {
        name: 'Miles per Hour',
        conversions: {
          kmh: {
            accuracy: 'approximate',
            formula: 'Multiply the speed value by 1.609',
            calculation: function (mph) { return mph * 1.609 }
          },
          ms: {
            accuracy: 'exact',
            formula: 'Divide the speed value by 2.237',
            calculation: function (mph) { return mph / 2.237 }
          },
          mph: {
            accuracy: '',
            formula: '',
            calculation: function (mph) { return mph }
          },
          fts: {
            accuracy: 'approximate',
            formula: 'Multiply the speed value by 1.467',
            calculation: function (mph) { return mph * 1.467 }
          },
          knots: {
            accuracy: 'exact',
            formula: 'Divide the speed value by 1.151',
            calculation: function (mph) { return mph / 1.151 }
          }
        },
        symbol: 'mph',
        definition: 'The number of miles traveled in 1 hour.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/miles_per_hour'
      },
      fts: {
        name: 'Feet per Second',
        conversions: {
          kmh: {
            accuracy: 'approximate',
            formula: 'Multiply the speed value by 1.097',
            calculation: function (fts) { return fts * 1.097 }
          },
          ms: {
            accuracy: 'approximate',
            formula: 'Divide the speed value by 3.281',
            calculation: function (fts) { return fts / 3.281 }
          },
          mph: {
            accuracy: 'approximate',
            formula: 'Divide the speed value by 1.467',
            calculation: function (fts) { return fts / 1.467 }
          },
          fts: {
            accuracy: '',
            formula: '',
            calculation: function (fts) { return fts }
          },
          knots: {
            accuracy: 'approximate',
            formula: 'Divide the speed value by 1.688',
            calculation: function (fts) { return fts / 1.688 }
          }
        },
        symbol: 'ft/s',
        definition: 'The distance in feet divided by time in seconds.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/foot_per_second'
      },
      knots: {
        name: 'Nautical Miles per Hour',
        conversions: {
          kmh: {
            accuracy: 'exact',
            formula: 'Multiply the speed value by 1.852',
            calculation: function (knots) { return knots * 1.852 }
          },
          ms: {
            accuracy: 'approximate',
            formula: 'Divide the speed value by 1.944',
            calculation: function (knots) { return knots / 1.944 }
          },
          mph: {
            accuracy: 'approximate',
            formula: 'Multiply the speed value by 1.151',
            calculation: function (knots) { return knots * 1.151 }
          },
          fts: {
            accuracy: 'approximate',
            formula: 'Multiply the speed value by 1.688',
            calculation: function (knots) { return knots * 1.688 }
          },
          knots: {
            accuracy: '',
            formula: '',
            calculation: function (knots) { return knots }
          }
        },
        symbol: 'knot',
        definition: 'The number of nautical miles traveled in 1 hour. It is most commonly used in maritime and air navigation where, for example, a vessel travels approximately 1 minute of geographic latitude in 1 hour along a meridian.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/knot_(unit)'
      }
    }
  },
  temperature: {
    calculator_name: 'Temperature',
    plural_form: 'Temperatures',
    calculator_icon: temperature_icon,
    search_terms: ['temperature', 'c', 'celsius', 'f', 'fahrenheit', 'k', 'kelvin'],
    units: {
      c: {
        name: 'Celsius',
        conversions: {
          c: {
            accuracy: '',
            formula: '',
            calculation: function (c) { return c }
          },
          f: {
            accuracy: 'exact',
            formula: '(°C × 9/5) + 32',
            calculation: function (c) { return (c * 9 / 5) + 32; }
          },
          k: {
            accuracy: 'exact',
            formula: '°C + 273.15',
            calculation: function (c) { return (Number.parseFloat(c) + 273.15); }
          }
        },
        symbol: '°C',
        definition: 'A scale defined by the temperature at which water freezes into ice as 0 °C and the temperature at which water boils as 100 °C at 1 atmosphere of pressure. A temperature difference of 1 °C and 1 K are exactly the same.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/celsius'
      },
      f: {
        name: 'Fahrenheit',
        conversions: {
          c: {
            accuracy: 'exact',
            formula: '(°F − 32) × 5/9',
            calculation: function (f) { return (f - 32) * 5 / 9; }
          },
          f: {
            accuracy: '',
            formula: '',
            calculation: function (f) { return f }
          },
          k: {
            accuracy: 'exact',
            formula: '(°F − 32) × 5/9 + 273.15',
            calculation: function (f) { return (Number.parseFloat(f) + 459.67) * 5 / 9; }
          }
        },
        symbol: '°F',
        definition: 'A scale defined by the temperature at which water freezes into ice as 32 °F and the temperature at which water boils as 212 °F at 1 atmosphere of pressure.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/fahrenheit'
      },
      k: {
        name: 'Kelvin',
        conversions: {
          c: {
            accuracy: 'exact',
            formula: 'K − 273.15',
            calculation: function (k) { return (k - 273.15); }
          },
          f: {
            accuracy: 'exact',
            formula: '(K − 273.15) × 9/5 + 32',
            calculation: function (k) { return (k * 9 / 5 - 459.67); }
          },
          k: {
            accuracy: '',
            formula: '',
            calculation: function (k) { return k }
          }
        },
        symbol: 'K',
        definition: 'A scale using absolute zero as its null point. A temperature difference of 1 K and 1 °C are exactly the same.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/kelvin'
      }
    }
  },
  time: {
    calculator_name: 'Time',
    plural_form: 'Times',
    calculator_icon: time_icon,
    search_terms: ['time', 's', 'seconds', 'm', 'minutes', 'h', 'hours', 'd', 'days'],
    units: {
      s: {
        name: 'Seconds',
        conversions: {
          s: {
            accuracy: '',
            formula: '',
            calculation: function (seconds) { return seconds; }
          },
          m: {
            accuracy: 'exact',
            formula: 'Divide the time by 60',
            calculation: function (seconds) { return (seconds / 60); }
          },
          h: {
            accuracy: 'exact',
            formula: 'Divide the time by 3,600',
            calculation: function (seconds) { return (seconds / 3600); }
          },
          d: {
            accuracy: 'exact',
            formula: 'Divide the time value by 86,400',
            calculation: function (seconds) { return (seconds / 86400); }
          }
        },
        symbol: 's',
        definition: '1 second is equal to 1/60 minute, 1/3,600 hour or 1/86,400 day.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/second'
      },
      m: {
        name: 'Minutes',
        conversions: {
          s: {
            accuracy: 'exact',
            formula: 'Multiply the time value by 60',
            calculation: function (minutes) { return (minutes * 60); }
          },
          m: {
            accuracy: '',
            formula: '',
            calculation: function (minutes) { return minutes; }
          },
          h: {
            accuracy: 'exact',
            formula: 'Divide the time value by 60',
            calculation: function (minutes) { return (minutes / 60); }
          },
          d: {
            accuracy: 'exact',
            formula: 'Divide the time value by 1,440',
            calculation: function (minutes) { return (minutes / 1440); }
          }
        },
        symbol: 'm',
        definition: '1 minute is equal to 60 seconds, 1/60 hour or 1/1,440 day.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/minute'
      },
      h: {
        name: 'Hours',
        conversions: {
          s: {
            accuracy: 'exact',
            formula: 'Multiply the time value by 3,600',
            calculation: function (hours) { return (hours * 3600); }
          },
          m: {
            accuracy: 'exact',
            formula: 'Multiply the time value by 60',
            calculation: function (hours) { return (hours * 60); }
          },
          h: {
            accuracy: '',
            formula: '',
            calculation: function (hours) { return hours; }
          },
          d: {
            accuracy: 'exact',
            formula: 'Divide the time value by 24',
            calculation: function (hours) { return (hours / 24); }
          }
        },
        symbol: 'h',
        definition: '1 hour is equal to 3,600 seconds, 60 minutes or 1/24 day.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/hour'
      },
      d: {
        name: 'Days',
        conversions: {
          s: {
            accuracy: 'exact',
            formula: 'Multiply the time value by 86,400',
            calculation: function (days) { return (days * 86400); }
          },
          m: {
            accuracy: 'exact',
            formula: 'Multiply the time value by 1,440',
            calculation: function (days) { return (days * 1440); }
          },
          h: {
            accuracy: 'exact',
            formula: 'Multiply the time value by 24',
            calculation: function (days) { return (days * 24); }
          },
          d: {
            accuracy: '',
            formula: '',
            calculation: function (days) { return days; }
          }
        },
        symbol: 'd',
        definition: '1 day is equal to 86,400 seconds, 1,440 minutes or 24 hours. Approximately the period of time during which the Earth completes 1 rotation.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/day'
      }
    }
  },
  volume: {
    calculator_name: 'Volume',
    plural_form: 'Volumes',
    calculator_icon: volume_icon,
    search_terms: ['volume', 'tsp', 'teaspoons', 'tbsp', 'tablespoons', 'oz', 'ounces', 'cups', 'pt', 'pints', 'qt', 'quarts', 'gal', 'gallons', 'ml', 'milliliters', 'liters', 'm3', 'cubic meters', 'in3', 'cubic inches', 'ft3', 'cubic feet', 'cubic foot'],
    units: {
      tsp: {
        name: 'Teaspoons',
        conversions: {
          tsp: {
            accuracy: '',
            formula: '',
            calculation: function (tsp) { return (tsp); }
          },
          tbsp: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 3',
            calculation: function (tsp) { return (tsp / 3); }
          },
          oz: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 6',
            calculation: function (tsp) { return (tsp / 6); }
          },
          cup: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 48',
            calculation: function (tsp) { return (tsp / 48); }
          },
          pt: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 96',
            calculation: function (tsp) { return (tsp / 96); }
          },
          qt: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 192',
            calculation: function (tsp) { return (tsp / 192); }
          },
          gal: {
            accuracy: 'approximate',
            formula: 'Divide the volume value by 768',
            calculation: function (tsp) { return (tsp / 768); }
          },
          ml: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 4.929',
            calculation: function (tsp) { return (tsp * 4.929); }
          },
          l: {
            accuracy: 'approximate',
            formula: 'Divide the volume value by 202.884',
            calculation: function (tsp) { return (tsp / 202.884); }
          },
          m3: {
            accuracy: 'approximate',
            formula: 'Divide the volume value by 202884.202',
            calculation: function (tsp) { return (tsp / 202884.202); }
          },
          in3: {
            accuracy: 'approximate',
            formula: 'Divide the volume value by 3.325',
            calculation: function (tsp) { return (tsp / 3.325); }
          },
          ft3: {
            accuracy: 'approximate',
            formula: 'Divide the volume value by 5745.041',
            calculation: function (tsp) { return (tsp / 5745.041); }
          }
        },
        symbol: 'tsp',
        definition: 'Most commonly used as a unit of culinary measure, 1 teaspoon in the United States is ​equal to 1/3 tablespoon.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/teaspoon'
      },
      tbsp: {
        name: 'Tablespoons',
        conversions: {
          tsp: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 3',
            calculation: function (tbsp) { return (tbsp * 3); }
          },
          tbsp: {
            accuracy: '',
            formula: '',
            calculation: function (tbsp) { return (tbsp); }
          },
          oz: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 2',
            calculation: function (tbsp) { return (tbsp / 2); }
          },
          cup: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 16',
            calculation: function (tbsp) { return (tbsp / 16); }
          },
          pt: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 32',
            calculation: function (tbsp) { return (tbsp / 32); }
          },
          qt: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 64',
            calculation: function (tbsp) { return (tbsp / 64); }
          },
          gal: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 256',
            calculation: function (tbsp) { return (tbsp / 256); }
          },
          ml: {
            accuracy: 'approximate',
            formula: 'Multiply the volume value by 14.787',
            calculation: function (tbsp) { return (tbsp * 14.787); }
          },
          l: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 67.628',
            calculation: function (tbsp) { return (tbsp / 67.628); }
          },
          m3: {
            accuracy: 'approximate',
            formula: 'Divide the volume value by 67628.045',
            calculation: function (tbsp) { return (tbsp / 67628.045); }
          },
          in3: {
            accuracy: 'approximate',
            formula: 'Divide the volume value by 1.108',
            calculation: function (tbsp) { return (tbsp / 1.108); }
          },
          ft3: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 1915.013',
            calculation: function (tbsp) { return (tbsp / 1915.013); }
          }
        },
        symbol: 'tbsp',
        definition: 'Most commonly used as a unit of culinary measure, 1 tablespoon in the United States is ​equal to 3 teaspoons or 1/2 fluid ounce.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/tablespoon'
      },
      oz: {
        name: 'Fluid Ounces',
        conversions: {
          tsp: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 6',
            calculation: function (oz) { return (oz * 6); }
          },
          tbsp: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 2',
            calculation: function (oz) { return (oz * 2); }
          },
          oz: {
            accuracy: '',
            formula: '',
            calculation: function (oz) { return (oz); }
          },
          cup: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 8',
            calculation: function (oz) { return (oz / 8); }
          },
          pt: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 16',
            calculation: function (oz) { return (oz / 16); }
          },
          qt: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 32',
            calculation: function (oz) { return (oz / 32); }
          },
          gal: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 128',
            calculation: function (oz) { return (oz / 128); }
          },
          ml: {
            accuracy: 'approximate',
            formula: 'Multiply the volume value by 29.574',
            calculation: function (oz) { return (oz * 29.574); }
          },
          l: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 33.814',
            calculation: function (oz) { return (oz / 33.814); }
          },
          m3: {
            accuracy: 'approximate',
            formula: 'Divide the volume value by 33,814.023',
            calculation: function (oz) { return (oz / 33814.023); }
          },
          in3: {
            accuracy: 'approximate',
            formula: 'Multiply the volume value by 1.805',
            calculation: function (oz) { return (oz * 1.805); }
          },
          ft3: {
            accuracy: 'approximate',
            formula: 'Divide the volume value by 957.506',
            calculation: function (oz) { return (oz / 957.506); }
          }
        },
        symbol: 'fl oz',
        definition: 'Most commonly used as a unit of culinary measure, 1 fluid ounce in the United States is ​equal to 2 tablespoons or 1/8 cup. The fluid ounce is distinct from the ounce as a unit of mass.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/fluid_ounce'
      },
      cup: {
        name: 'Cups',
        conversions: {
          tsp: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 48',
            calculation: function (cup) { return (cup * 48); }
          },
          tbsp: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 16',
            calculation: function (cup) { return (cup); }
          },
          oz: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 8',
            calculation: function (cup) { return (cup * 8); }
          },
          cup: {
            accuracy: '',
            formula: '',
            calculation: function (cup) { return (cup); }
          },
          pt: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 2',
            calculation: function (cup) { return (cup / 2); }
          },
          qt: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 4',
            calculation: function (cup) { return (cup / 4); }
          },
          gal: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 16',
            calculation: function (cup) { return (cup / 16); }
          },
          ml: {
            accuracy: 'approximate',
            formula: 'Multiply the volume value by 236.588',
            calculation: function (cup) { return (cup * 236.588); }
          },
          l: {
            accuracy: 'approximate',
            formula: 'Divide the volume value by 4.227',
            calculation: function (cup) { return (cup / 4.227); }
          },
          m3: {
            accuracy: 'approximate',
            formula: 'Divide the volume value by 4,226.753',
            calculation: function (cup) { return (cup / 4226.753); }
          },
          in3: {
            accuracy: 'approximate',
            formula: 'Multiply the volume value by 14.438',
            calculation: function (cup) { return (cup * 14.438); }
          },
          ft3: {
            accuracy: 'approximate',
            formula: 'Divide the volume value by 119.688',
            calculation: function (cup) { return (cup / 119.688); }
          }
        },
        symbol: 'cup',
        definition: 'Most commonly used as a unit of culinary measure, 1 cup in the United States is ​equal to 8 fluid ounces or 1/2 pint.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/cup_(unit)'
      },
      pt: {
        name: 'Pints',
        conversions: {
          tsp: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 96',
            calculation: function (pt) { return (pt * 96); }
          },
          tbsp: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 32',
            calculation: function (pt) { return (pt * 32); }
          },
          oz: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 16',
            calculation: function (pt) { return (pt * 16); }
          },
          cup: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 2',
            calculation: function (pt) { return (pt * 2); }
          },
          pt: {
            accuracy: '',
            formula: '',
            calculation: function (pt) { return (pt); }
          },
          qt: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 2',
            calculation: function (pt) { return (pt / 2); }
          },
          gal: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 8',
            calculation: function (pt) { return (pt / 8); }
          },
          ml: {
            accuracy: 'approximate',
            formula: 'Multiply the volume value by 473.176',
            calculation: function (pt) { return (pt * 473.176); }
          },
          l: {
            accuracy: 'approximate',
            formula: 'Divide the volume value by 2.113',
            calculation: function (pt) { return (pt / 2.113); }
          },
          m3: {
            accuracy: 'approximate',
            formula: 'Divide the volume value by 2,113.376',
            calculation: function (pt) { return (pt / 2113.376); }
          },
          in3: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 28.875',
            calculation: function (pt) { return (pt * 28.875); }
          },
          ft3: {
            accuracy: 'approximate',
            formula: 'Divide the volume value by 59.844',
            calculation: function (pt) { return (pt / 59.844); }
          }
        },
        symbol: 'pt',
        definition: 'Commonly used as a unit of culinary measure, 1 pint in the United States is ​equal to 2 cups or 1/2 quart. The term “pint” is also used in reference to a unit for draught beer, although the volume may differ depending on the country.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/pint'
      },
      qt: {
        name: 'Quarts',
        conversions: {
          tsp: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 192',
            calculation: function (qt) { return (qt * 192); }
          },
          tbsp: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 64',
            calculation: function (qt) { return (qt * 64); }
          },
          oz: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 32',
            calculation: function (qt) { return (qt * 32); }
          },
          cup: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 4',
            calculation: function (qt) { return (qt * 4); }
          },
          pt: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 2',
            calculation: function (qt) { return (qt * 2); }
          },
          qt: {
            accuracy: '',
            formula: '',
            calculation: function (qt) { return (qt); }
          },
          gal: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 4',
            calculation: function (qt) { return (qt / 4); }
          },
          ml: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 946.353',
            calculation: function (qt) { return (qt * 946.353); }
          },
          l: {
            accuracy: 'approximate',
            formula: 'Divide the volume value by 1.057',
            calculation: function (qt) { return (qt / 1.057); }
          },
          m3: {
            accuracy: 'approximate',
            formula: 'Divide the volume value by 1,056.688',
            calculation: function (qt) { return (qt / 1056.688); }
          },
          in3: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 57.75',
            calculation: function (qt) { return (qt * 57.75); }
          },
          ft3: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 29.922',
            calculation: function (qt) { return (qt / 29.922); }
          }
        },
        symbol: 'qt',
        definition: 'Sometimes used as a unit of culinary measure, 1 quart in the United States is ​equal to 2 pints or 1/4 gallon. It is roughly equal to 1 liter.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/quart'
      },
      gal: {
        name: 'Gallons',
        conversions: {
          tsp: {
            accuracy: 'approximate',
            formula: 'Multiply the volume value by 768',
            calculation: function (gal) { return (gal * 768); }
          },
          tbsp: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 256',
            calculation: function (gal) { return (gal * 256); }
          },
          oz: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 128',
            calculation: function (gal) { return (gal * 128); }
          },
          cup: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 16',
            calculation: function (gal) { return (gal * 16); }
          },
          pt: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 8',
            calculation: function (gal) { return (gal * 8); }
          },
          qt: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 4',
            calculation: function (gal) { return (gal * 4); }
          },
          gal: {
            accuracy: '',
            formula: '',
            calculation: function (gal) { return (gal); }
          },
          ml: {
            accuracy: 'approximate',
            formula: 'Multiply the volume value by 3,785.412',
            calculation: function (gal) { return (gal * 3785.412); }
          },
          l: {
            accuracy: 'approximate',
            formula: 'Multiply the volume value by 3.785',
            calculation: function (gal) { return (gal * 3.785); }
          },
          m3: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 264.172',
            calculation: function (gal) { return (gal / 264.172); }
          },
          in3: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 231',
            calculation: function (gal) { return (gal * 231); }
          },
          ft3: {
            accuracy: 'approximate',
            formula: 'Divide the volume value by 7.481',
            calculation: function (gal) { return (gal / 7.481); }
          }
        },
        symbol: 'gal',
        definition: 'Sometimes used as a unit of culinary measure, 1 gallon in the United States is ​equal to 4 quarts. It is equal to 231 cubic inches.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/gallon'
      },
      ml: {
        name: 'Milliliters',
        conversions: {
          tsp: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 4.929',
            calculation: function (ml) { return (ml / 4.929); }
          },
          tbsp: {
            accuracy: 'approximate',
            formula: 'Divide the volume value by 14.787',
            calculation: function (ml) { return (ml / 14.787); }
          },
          oz: {
            accuracy: 'approximate',
            formula: 'Divide the volume value by 29.574',
            calculation: function (ml) { return (ml / 29.574); }
          },
          cup: {
            accuracy: 'approximate',
            formula: 'Divide the volume value by 236.588',
            calculation: function (ml) { return (ml / 236.588); }
          },
          pt: {
            accuracy: 'approximate',
            formula: 'Divide the volume value by 473.176',
            calculation: function (ml) { return (ml / 473.176); }
          },
          qt: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 946.353',
            calculation: function (ml) { return (ml / 946.353); }
          },
          gal: {
            accuracy: 'approximate',
            formula: 'Divide the volume value by 3,785.412',
            calculation: function (ml) { return (ml / 3785.412); }
          },
          ml: {
            accuracy: '',
            formula: '',
            calculation: function (ml) { return (ml); }
          },
          l: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 1,000',
            calculation: function (ml) { return (ml / 1000); }
          },
          m3: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 1e+6',
            calculation: function (ml) { return (ml / 1e+6); }
          },
          in3: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 16.387',
            calculation: function (ml) { return (ml / 16.387); }
          },
          ft3: {
            accuracy: 'approximate',
            formula: 'Divide the volume value by 28,316.847',
            calculation: function (ml) { return (ml / 28316.847); }
          }
        },
        symbol: 'ml',
        definition: 'The most commonly used derived unit of the liter. It is defined as 1/1,000 liter, and is equal to 1 cubic centimeter.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/liter'
      },
      l: {
        name: 'Liters',
        conversions: {
          tsp: {
            accuracy: 'approximate',
            formula: 'Multiply the volume value by 202.884',
            calculation: function (l) { return (l * 202.884); }
          },
          tbsp: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 67.628',
            calculation: function (l) { return (l * 67.628); }
          },
          oz: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 33.814',
            calculation: function (l) { return (l * 33.814); }
          },
          cup: {
            accuracy: 'approximate',
            formula: 'Multiply the volume value by 4.227',
            calculation: function (l) { return (l * 4.227); }
          },
          pt: {
            accuracy: 'approximate',
            formula: 'Multiply the volume value by 2.113',
            calculation: function (l) { return (l * 2.113); }
          },
          qt: {
            accuracy: 'approximate',
            formula: 'Multiply the volume value by 1.057',
            calculation: function (l) { return (l * 1.057); }
          },
          gal: {
            accuracy: 'approximate',
            formula: 'Divide the volume value by 3.785',
            calculation: function (l) { return (l / 3.785); }
          },
          ml: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 1,000',
            calculation: function (l) { return (l * 1000); }
          },
          l: {
            accuracy: '',
            formula: '',
            calculation: function (l) { return (l); }
          },
          m3: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 1,000',
            calculation: function (l) { return (l / 1000); }
          },
          in3: {
            accuracy: 'approximate',
            formula: 'Multiply the volume value by 61.024',
            calculation: function (l) { return (l * 61.024); }
          },
          ft3: {
            accuracy: 'approximate',
            formula: 'Divide the volume value by 28.317',
            calculation: function (l) { return (l / 28.317); }
          }
        },
        symbol: 'l',
        definition: 'A special name for a cubic decimeter (a cube with each of its three dimensions being 10 centimeters in length). Equal to 1,000 cubic centimeters or 1/1,000 cubic meter.',
        illustration: liter_illustration,
        wikipedia_page: 'https://en.wikipedia.org/wiki/liter'
      },
      m3: {
        name: 'Cubic Meters',
        conversions: {
          tsp: {
            accuracy: 'approximate',
            formula: 'Multiply the volume value by 202,884.202',
            calculation: function (m3) { return (m3 * 202884.202); }
          },
          tbsp: {
            accuracy: 'approximate',
            formula: 'Multiply the volume value by 67,628.045',
            calculation: function (m3) { return (m3 * 67628.045); }
          },
          oz: {
            accuracy: 'approximate',
            formula: 'Multiply the volume value by 33,814.023',
            calculation: function (m3) { return (m3 * 33814.023); }
          },
          cup: {
            accuracy: 'approximate',
            formula: 'Multiply the volume value by 4,226.753',
            calculation: function (m3) { return (m3 * 4226.753); }
          },
          pt: {
            accuracy: 'approximate',
            formula: 'Multiply the volume value by 2,113.376',
            calculation: function (m3) { return (m3 * 2113.376); }
          },
          qt: {
            accuracy: 'approximate',
            formula: 'Multiply the volume value by 1,056.688',
            calculation: function (m3) { return (m3 * 1056.688); }
          },
          gal: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 264.172',
            calculation: function (m3) { return (m3 * 264.172); }
          },
          ml: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 1e+6',
            calculation: function (m3) { return (m3 * 1e+6); }
          },
          l: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 1,000',
            calculation: function (m3) { return (m3 * 1000); }
          },
          m3: {
            accuracy: '',
            formula: '',
            calculation: function (m3) { return (m3); }
          },
          in3: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 61,023.744',
            calculation: function (m3) { return (m3 * 61023.744); }
          },
          ft3: {
            accuracy: 'approximate',
            formula: 'Multiply the volume value by 35.315',
            calculation: function (m3) { return (m3 * 35.315); }
          }
        },
        symbol: 'm³',
        definition: 'The volume cube with each of its three dimensions being 1 meter in length.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/cubic_meter'
      },
      in3: {
        name: 'Cubic Inches',
        conversions: {
          tsp: {
            accuracy: 'approximate',
            formula: 'Multiply the volume value by 3.325',
            calculation: function (in3) { return (in3 * 3.325); }
          },
          tbsp: {
            accuracy: 'approximate',
            formula: 'Multiply the volume value by 1.108',
            calculation: function (in3) { return (in3 * 1.108); }
          },
          oz: {
            accuracy: 'approximate',
            formula: 'Divide the volume value by 1.805',
            calculation: function (in3) { return (in3 / 1.805); }
          },
          cup: {
            accuracy: 'approximate',
            formula: 'Divide the volume value by 14.438',
            calculation: function (in3) { return (in3 / 14.438); }
          },
          pt: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 28.875',
            calculation: function (in3) { return (in3 / 28.875); }
          },
          qt: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 57.75',
            calculation: function (in3) { return (in3 / 57.75); }
          },
          gal: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 231',
            calculation: function (in3) { return (in3 / 231); }
          },
          ml: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 16.387',
            calculation: function (in3) { return (in3 * 16.387); }
          },
          l: {
            accuracy: 'approximate',
            formula: 'Divide the volume value by 61.024',
            calculation: function (in3) { return (in3 / 61.024); }
          },
          m3: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 61,023.744',
            calculation: function (in3) { return (in3 / 61023.744); }
          },
          in3: {
            accuracy: '',
            formula: '',
            calculation: function (in3) { return (in3); }
          },
          ft3: {
            accuracy: 'exact',
            formula: 'Divide the volume value by 1728',
            calculation: function (in3) { return (in3 / 1728); }
          }
        },
        symbol: 'in³',
        definition: 'The volume cube with each of its three dimensions being 1 inch long.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/cubic_inch'
      },
      ft3: {
        name: 'Cubic Feet',
        conversions: {
          tsp: {
            accuracy: 'approximate',
            formula: 'Multiply the volume value by 5,745.041',
            calculation: function (ft3) { return (ft3 * 5745.041); }
          },
          tbsp: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 1,915.013',
            calculation: function (ft3) { return (ft3 * 1915.013); }
          },
          oz: {
            accuracy: 'approximate',
            formula: 'Multiply the volume value by 957.506',
            calculation: function (ft3) { return (ft3 * 957.506); }
          },
          cup: {
            accuracy: 'approximate',
            formula: 'Multiply the volume value by 119.688',
            calculation: function (ft3) { return (ft3 * 119.688); }
          },
          pt: {
            accuracy: 'approximate',
            formula: 'Multiply the volume value by 59.844',
            calculation: function (ft3) { return (ft3 * 59.844); }
          },
          qt: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 29.922',
            calculation: function (ft3) { return (ft3 * 29.922); }
          },
          gal: {
            accuracy: 'approximate',
            formula: 'Multiply the volume value by 7.481',
            calculation: function (ft3) { return (ft3 * 7.481); }
          },
          ml: {
            accuracy: 'approximate',
            formula: 'Multiply the volume value by 28,316.847',
            calculation: function (ft3) { return (ft3 * 28316.847); }
          },
          l: {
            accuracy: 'approximate',
            formula: 'Multiply the volume value by 28.317',
            calculation: function (ft3) { return (ft3 * 28.317); }
          },
          m3: {
            accuracy: 'approximate',
            formula: 'Divide the volume value by 35.315',
            calculation: function (ft3) { return (ft3 / 35.315); }
          },
          in3: {
            accuracy: 'exact',
            formula: 'Multiply the volume value by 1728',
            calculation: function (ft3) { return (ft3 * 1728); }
          },
          ft3: {
            accuracy: '',
            formula: '',
            calculation: function (ft3) { return (ft3); }
          }
        },
        symbol: 'ft³',
        definition: 'The volume cube with each of its three dimensions being 1 foot long.',
        illustration: '',
        wikipedia_page: 'https://en.wikipedia.org/wiki/cubic_foot'
      },
    }
  }
};

export default data;
