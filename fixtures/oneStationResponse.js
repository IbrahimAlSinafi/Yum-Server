const oneStationResponse = {
  data: {
    stations: [
      {
        capacity: 39,
        rental_methods: [ 'CREDITCARD', 'KEY', 'TRANSITCARD' ],
        short_name: '15541',
        lat: 41.87651122881695,
        eightd_has_key_dispenser: false,
        rental_uris: {
          android: 'https://chi.lft.to/lastmile_qr_scan',
          ios: 'https://chi.lft.to/lastmile_qr_scan'
        },
        eightd_station_services: [],
        lon: -87.62054800987242,
        external_id: 'a3a36d9e-a135-11e9-9cda-0a87ae2ba916',
        station_type: 'classic',
        electric_bike_surcharge_waiver: false,
        has_kiosk: true,
        station_id: '2',
        name: 'Buckingham Fountain'
      }
    ]
  }
}

module.exports = { oneStationResponse }