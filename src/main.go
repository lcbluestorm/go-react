package main

import "fmt"

import "net/http"
import "./handlers"

func main() {
	fmt.Printf("server start, listen port 9600")
	http.HandleFunc("/", handlers.IndexHandler)
	http.ListenAndServe(":9600", nil)
}
