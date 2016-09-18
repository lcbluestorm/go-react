package main

import "fmt"

import "net/http"
import "./handlers"

func main() {
	fmt.Printf("server start, listen port 9600")
	http.HandleFunc("/api/comments", handlers.CommentListHandler)
	http.HandleFunc("/", handlers.IndexHandler)
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./front/dist"))))
	http.ListenAndServe(":9600", nil)
}
