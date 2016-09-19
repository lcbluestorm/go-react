package handlers

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
)

// CommentListHandler Get method
func cmtListDoGet(w http.ResponseWriter, r *http.Request) {
	res, err := http.Get("http://test-wx.youliaodao.cn/wx/api/comments?question_id=108510")
	defer res.Body.Close()
	if err == nil {
		body, err := ioutil.ReadAll(res.Body)
		if err == nil {
			bodyJSON, err := json.Marshal(string(body))
			if err == nil {
				w.Write(bodyJSON)
				// log.Printf("%s", string(string(body)))
			} else {
				log.Fatal(err)
			}

		} else {
			log.Fatal(err)
		}
	} else {
		log.Fatal(err)
	}
}

// CommentListHandler Post method
func cmtListDoPost(w http.ResponseWriter, r *http.Request) {

}

// CommentListHandler 获取评论列表
func CommentListHandler(w http.ResponseWriter, r *http.Request) {
	method := r.Method
	log.Printf("coment list handler, method: %s", method)
	if method == "GET" {
		cmtListDoGet(w, r)
	} else if method == "POST" {
		cmtListDoPost(w, r)
	}
}

///////////////////////////////////////////////////////////////////////////////////////
