from threading import Lock

import flask
import json
import os

app = flask.Flask(__name__)

rwlock = Lock()

@app.route('/portal/<matchid>')
def portal(matchid):
    with open("matchindex.json") as fl:
        json_data = json.load(fl)
        if matchid not in json_data.keys() or\
           not os.path.exists(json_data[matchid]):
            return flask.Response(status=404)
        fp = json_data[matchid]
    with open(fp) as fl:
        json_data = json.load(fl)
    sport = json_data["sport"]
    school1 = json_data["school1"]
    school2 = json_data["school2"]
    data = json_data["data"]
    config = json_data["config"]
    return flask.render_template('index.html', sport=sport, school1=school1, school2=school2, data=data, config=config)

@app.route('/portal/submit/', methods=["POST"])
def portal_submit():
    data = flask.request.get_json(force=True)
    if "matchid" not in data.keys(): return flask.Response(status=400)
    matchid = data.pop("matchid")
    with open("matchindex.json") as fl:
        json_data = json.load(fl)
        if matchid not in json_data.keys() or\
           not os.path.exists(json_data[matchid]):
            return flask.Response(status=400)
        fp = json_data[matchid]
    with open(fp) as fl:
        json_data = json.load(fl)
    json_data["data"] = data
    with rwlock:
        with open(fp, mode='w') as fl:
            json.dump(json_data, fl, indent=" ")
    return {"success": True}

@app.route('/portal/main.js')
def mainjs(): return flask.send_file("./assets/main.js")

@app.route('/portal/style.css')
def stylecss(): return flask.send_file("./assets/style.css")

if __name__ == "__main__":
    app.run(debug=True)