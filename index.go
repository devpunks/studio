package main

import (
  "fmt";
  "time";
)

type Microphone struct {
  ID              int
  Name            string
  ProductionDate  time.Time
}


func main () {
  fmt.Println (`SHIT THIS WORKS!!!`)

  microphone := map[string]string{
    "name": "Sennheiser MKH416",
    "polar-pattern": "Figure 8 Cardioid",
  }

//Microphone := map[string]interface{}{
  m := Microphone{
    ID: 416,
    Name: "Sennheiser MKH416",
    // https://github.com/fxtlabs/date/blob/master/date.go#L93
    "Production-Date": time.Date(1979, time.November, 13, 23, 45, 2, 0, time.UTC),
  }

  for key, value := range microphone {
    fmt.Println(key, value)
  }

  fmt.Println("Microphone ID", Microphone["ID"])
  fmt.Println("Microphone Name", Microphone["Name"])
  fmt.Println("Microphone Production Date", Microphone["Production-Date"])
}
