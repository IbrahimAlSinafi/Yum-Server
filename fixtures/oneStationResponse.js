const oneStationResponse = {
  data: {
    authorized: true,
    code: 200,
    response: [
      {
        rental_uris: [Object],
        has_kiosk: true,
        station_type: 'classic',
        eightd_has_key_dispenser: false,
        lon: -87.62054800987242,
        electric_bike_surcharge_waiver: false,
        station_id: '2',
        external_id: 'a3a36d9e-a135-11e9-9cda-0a87ae2ba916',
        capacity: 39,
        name: 'Buckingham Fountain',
        rental_methods: [Array],
        short_name: '15541',
        eightd_station_services: [],
        lat: 41.87651122881695
      }
    ]
  }
}

module.exports = { oneStationResponse }