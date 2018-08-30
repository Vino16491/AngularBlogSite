import { MongoClient, connect } from "mongodb";
import * as assert from "assert";
import { OnInit, Injectable } from "@angular/core";
@Injectable()
export class dbConnectService implements OnInit {
  // Connection URL
  url = "mongodb://localhost:27017";

  // Database Name
  dbName = "myproject";

  constructor(private dbClient: MongoClient) {}
  ngOnInit() {
    this.databaseConnect();
  }
  databaseConnect() {
    connect(
      this.url,
      () => {
        (err, client) => {
          assert.equal(null, err);
          console.log("Connected HUray to Database");
          client.db(this.dbName);
          client.close();
        };
      }
    );
  }
}
