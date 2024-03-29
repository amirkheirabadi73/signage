'use strict'

const Monitor = use('App/Models/Monitor')

class MonitorController {
  async index({ request, response, view }) {
    if (request.method() == 'GET') {
      return view.render('monitors.index', {
        title: 'monitor management',
      })
    }

    const monitors = Monitor.query().get()

    return {
      meta: {
        page: 1,
        pages: 35,
        perpage: 10,
        total: 350,
        sort: 'asc',
        field: 'ShipDate',
      },
      data: [
        {
          RecordID: 10,
          OrderID: '55154-5393',
          ShipCountry: 'NG',
          ShipCity: 'Sapele',
          ShipName: 'Moen, Kertzmann and Mills',
          ShipAddress: '1 Nancy Junction',
          CompanyEmail: 'epere9@sina.com.cn',
          CompanyAgent: 'Ely Pere',
          CompanyName: "Jacobi, O'Conner and Kuhlman",
          Currency: 'NGN',
          Notes:
            'adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula',
          Department: 'Shoes',
          Website: 'whitehouse.gov',
          Latitude: 5.8750769,
          Longitude: 5.6931356,
          ShipDate: '1/1/2016',
          PaymentDate: '2017-06-20 10:42:35',
          TimeZone: 'Africa/Lagos',
          Status: 3,
          Type: 1,
          TotalPayment: '88,211.68 NGN',
        },
        {
          RecordID: 263,
          OrderID: '43406-0032',
          ShipCountry: 'US',
          ShipCity: 'Fort Pierce',
          ShipName: 'Moore-Schaden',
          ShipAddress: '451 Fuller Junction',
          CompanyEmail: 'tdefau7a@google.pl',
          CompanyAgent: 'Tristan Defau',
          CompanyName: 'Mayer and Sons',
          Currency: 'USD',
          Notes:
            'mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus',
          Department: 'Music',
          Website: 'cornell.edu',
          Latitude: 27.3980151,
          Longitude: -80.3714326,
          ShipDate: '1/1/2017',
          PaymentDate: '2017-05-21 01:45:57',
          TimeZone: 'America/New_York',
          Status: 2,
          Type: 2,
          TotalPayment: '7,105.23 USD',
        },
        {
          RecordID: 77,
          OrderID: '68016-527',
          ShipCountry: 'PH',
          ShipCity: 'Batarasa',
          ShipName: 'Gibson Inc',
          ShipAddress: '948 Roxbury Center',
          CompanyEmail: 'smatitiaho24@dailymotion.com',
          CompanyAgent: 'Skippy Matitiaho',
          CompanyName: 'Monahan, Haley and Murphy',
          Currency: 'PHP',
          Notes:
            'sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius',
          Department: 'Jewelery',
          Website: 'printfriendly.com',
          Latitude: 8.5015747,
          Longitude: 117.3557854,
          ShipDate: '1/12/2017',
          PaymentDate: '2016-09-07 16:34:55',
          TimeZone: 'Asia/Manila',
          Status: 1,
          Type: 3,
          TotalPayment: '9,541.82 PHP',
        },
        {
          RecordID: 330,
          OrderID: '54868-5303',
          ShipCountry: 'PH',
          ShipCity: 'Sillon',
          ShipName: 'Balistreri Group',
          ShipAddress: '8203 Truax Center',
          CompanyEmail: 'kvickarman95@storify.com',
          CompanyAgent: 'Kipp Vickarman',
          CompanyName: 'Kerluke and Sons',
          Currency: 'PHP',
          Notes:
            'lobortis ligula sit amet eleifend pede libero quis orci nullam molestie',
          Department: 'Clothing',
          Website: 'vkontakte.ru',
          Latitude: 11.186148,
          Longitude: 123.7487563,
          ShipDate: '1/14/2017',
          PaymentDate: '2017-05-16 18:29:45',
          TimeZone: 'Asia/Manila',
          Status: 6,
          Type: 1,
          TotalPayment: '8,300.97 PHP',
        },
        {
          RecordID: 51,
          OrderID: '49884-659',
          ShipCountry: 'ID',
          ShipCity: 'Atap',
          ShipName: 'Blanda Group',
          ShipAddress: '1 Monica Alley',
          CompanyEmail: 'sjackes1e@reuters.com',
          CompanyAgent: 'Shelagh Jackes',
          CompanyName: 'Schiller Inc',
          Currency: 'IDR',
          Notes:
            'iaculis justo in hac habitasse platea dictumst etiam faucibus cursus',
          Department: 'Jewelery',
          Website: 'forbes.com',
          Latitude: 3.8152026,
          Longitude: 117.1147095,
          ShipDate: '1/15/2016',
          PaymentDate: '2016-06-24 03:01:19',
          TimeZone: 'Asia/Makassar',
          Status: 2,
          Type: 1,
          TotalPayment: '8,397.18 IDR',
        },
        {
          RecordID: 313,
          OrderID: '23155-179',
          ShipCountry: 'PA',
          ShipCity: 'Potrero Grande',
          ShipName: 'Olson, Schmeler and Little',
          ShipAddress: '3 Bartillon Place',
          CompanyEmail: 'cgrandison8o@auda.org.au',
          CompanyAgent: 'Corliss Grandison',
          CompanyName: 'Mills-Beatty',
          Currency: 'PAB',
          Notes:
            'egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend',
          Department: 'Clothing',
          Website: 'mlb.com',
          Latitude: 8.881634,
          Longitude: -79.8268729,
          ShipDate: '1/16/2016',
          PaymentDate: '2017-12-06 10:30:59',
          TimeZone: 'America/Panama',
          Status: 3,
          Type: 2,
          TotalPayment: '85,706.89 PAB',
        },
        {
          RecordID: 153,
          OrderID: '53341-515',
          ShipCountry: 'MD',
          ShipCity: 'Saharna',
          ShipName: 'Leffler, Sawayn and Denesik',
          ShipAddress: '07247 Del Sol Hill',
          CompanyEmail: 'fshank48@spotify.com',
          CompanyAgent: 'Findley Shank',
          CompanyName: 'Reilly LLC',
          Currency: 'MDL',
          Notes:
            'dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo',
          Department: 'Industrial',
          Website: 'discuz.net',
          Latitude: 47.6949791,
          Longitude: 28.9654659,
          ShipDate: '1/17/2016',
          PaymentDate: '2017-01-05 15:53:50',
          TimeZone: 'Europe/Chisinau',
          Status: 6,
          Type: 1,
          TotalPayment: '993,295.17 MDL',
        },
        {
          RecordID: 112,
          OrderID: '50580-198',
          ShipCountry: 'PT',
          ShipCity: 'Loureiro',
          ShipName: 'Labadie, Hegmann and Jones',
          ShipAddress: '9986 Arapahoe Place',
          CompanyEmail: 'bglaister33@bbb.org',
          CompanyAgent: 'Baxie Glaister',
          CompanyName: 'Stark, Haley and Koepp',
          Currency: 'EUR',
          Notes:
            'suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas',
          Department: 'Tools',
          Website: 'apple.com',
          Latitude: 41.4808684,
          Longitude: -8.3624629,
          ShipDate: '1/17/2016',
          PaymentDate: '2016-04-24 01:53:42',
          TimeZone: 'Europe/Lisbon',
          Status: 3,
          Type: 3,
          TotalPayment: '9,705.78 EUR',
        },
        {
          RecordID: 29,
          OrderID: '30142-106',
          ShipCountry: 'RU',
          ShipCity: 'Loukhi',
          ShipName: 'Klein-Streich',
          ShipAddress: '61 Cascade Plaza',
          CompanyEmail: 'mgallamores@businesswire.com',
          CompanyAgent: 'Minor Gallamore',
          CompanyName: 'Huels-Strosin',
          Currency: 'RUB',
          Notes:
            'sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique',
          Department: 'Beauty',
          Website: 'epa.gov',
          Latitude: 66.0733463,
          Longitude: 33.0544476,
          ShipDate: '1/17/2016',
          PaymentDate: '2016-03-09 04:40:38',
          TimeZone: 'Europe/Moscow',
          Status: 2,
          Type: 2,
          TotalPayment: '931,956.17 RUB',
        },
        {
          RecordID: 135,
          OrderID: '49348-387',
          ShipCountry: 'FR',
          ShipCity: 'Sens',
          ShipName: 'Collins, Hackett and Vandervort',
          ShipAddress: '594 Hanover Crossing',
          CompanyEmail: 'tkiezler3q@live.com',
          CompanyAgent: 'Tommy Kiezler',
          CompanyName: 'Eichmann and Sons',
          Currency: 'EUR',
          Notes:
            'etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi',
          Department: 'Toys',
          Website: 'instagram.com',
          Latitude: 48.1903349,
          Longitude: 3.2995005,
          ShipDate: '1/18/2017',
          PaymentDate: '2016-12-28 03:56:57',
          TimeZone: 'Europe/Paris',
          Status: 2,
          Type: 2,
          TotalPayment: '811,814.44 EUR',
        },
      ],
    }
  }
}

module.exports = MonitorController
