export interface DeviceModel {
  id: string,
  name: string,
  last_active: string
}

export interface ResponseDevices {
  data: {
    metering_devices: {
      data: [{
        id: string,
        name: string,
        last_active: string
      }]
    }
  }
}
