package main

import (
  "log"
  "fmt"
  "time"
  "net/http"
  "io/ioutil"
//"github.com/gorilla/mux"
)

type Microphone struct {
  ID              int
  Name            string
  ProductionDate  time.Time
}


func Index(w http.ResponseWriter, req *http.Request) {
  w.Write([]byte("Hello from web server!\n\n\n" + time.Now().String()))

  URL := "https://api.github.com/users"
  res, err := http.Get(URL)

  if err != nil {
    log.Println(err)
    return
  }

  defer res.Body.Close()

  responseBodyBytes, err := ioutil.ReadAll(res.Body)

  if err != nil {
    log.Println(err)
    return
  }

  w.Write(responseBodyBytes)
}


func Serve(port string) {
  http.HandleFunc("/", Index)

  if err := http.ListenAndServe(port, nil); err != nil {
    panic(err)
  }
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
    ProductionDate: time.Date(1979, time.November, 13, 23, 45, 2, 0, time.UTC),
  }

  for key, value := range microphone {
    fmt.Println(key, value)
  }

  fmt.Println("Microphone ID", m.ID)
  fmt.Println("Microphone Name", m.Name)
  fmt.Println("Microphone Production Date", m.ProductionDate)

  Serve(":8080")
}
