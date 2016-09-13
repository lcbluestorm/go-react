package handlers

import (
	"html/template"
	"log"
	"net/http"
)

// IndexHandler 首页
func IndexHandler(w http.ResponseWriter, r *http.Request) {
	log.Println("index handler")
	t, err := template.ParseFiles("front/index.html")
	if err == nil {
		err = t.Execute(w, nil)
		if err != nil {
			log.Fatal(err)
		}
	} else {
		log.Fatal(err)
	}
}
