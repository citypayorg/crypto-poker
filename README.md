﻿# crypto-poker
 
 Click here to view the [LIVE DEMO](https://troyshouse.poker/)

Features
---
* Texas Holdem no limit game implementation
* Casual Table Play
* Tournaments
* Admin management app
* Crypto payment gateway (DASH, ETH, BTC support)

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 
 tldr
 This software is a hobby/research project - you are allowed to use it for ANY purpose (including commercial) but the software is provided "as is" without ANY warranty of any kind. Online poker is restricted in some jurisdictions - do your research. **None of this code should be considered commercial-grade**
 
 ![screenshot](https://i.imgur.com/aLDDolt.png "Screenshot")
 ![screenshot](https://i.imgur.com/3jfNjfQ.png "Admin 1")
 ![screenshot](https://i.imgur.com/jUEddky.png "Admin 2")


Click here to view the [LIVE DEMO](https://troyshouse.poker/)




Technical Setup Instructions
---

Prerequisites
* node v10 or later
* mongodb
############### 2020-11-30  ###############
cd ~/ctppoker/poker.engine
npm uninstall mongodb
 and install
npm install mongodb@2.2.23 --save
service mongod start
systemctl enable mongod.service

###########################################

* typescript (`sudo npm i typescript -g`)
* aurelia (`sudo npm install aurelia-cli@0.34.0 -g`)
* `npm install --global --production windows-build-tools` (windows only)

/home/dev/ctppoker/scripts/vagrant/game_server/install.sh

Getting Started

cd ~/ctppoker/

1) Run the client
```
cd ~/ctppoker/poker.ui
npm i
au run -w
```
cd ~/ctppoker/poker.ui
au run -w

*note, the client must be compiled prior to compiling the server due to shared class definitions*

2) Run the server
```
--------------------------------
service mongod start
--------------------------------
cd ~/ctppoker/poker.engine
npm i
tsc
cp ../scripts/vagrant/game_server/install_files/game_server.env ./build/poker.engine/.env
cd ./build/poker.engine
node ./src/app.js
--------------------------------
cd ~/ctppoker/poker.engine
tsc
cd ~/ctppoker/poker.engine/build/poker.engine
node ./src/app.js
```
remark
 //####delete####
 /home/dev/ctppoker/poker.payments/src/webserver/web-server.ts
 /home/dev/ctppoker/poker.payments/src/services/DashCoreBlockService.ts  39998


There are also ~300 unit tests for the engine.
```
cd ~/ctppoker/poker.engine
npm test
```


Credits:

Thank you to [mdashx](https://github.com/mdashx) for [the inspiration](https://github.com/mdashx/pangea-poker-frontend) and the use of the background table images, cards and animation logic.


//////////////////////
/ctppoker/poker.engine/src/services/ExchangeRatesService.ts
    https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${currencyQuery}&tsyms=USD
    https://min-api.cryptocompare.com/data/pricemultifull?fsyms=DASH&tsyms=USD

/home/dev/ctppoker/poker.engine/src/model/table/DefaultCurrencyConfig.ts


/home/dev/ctppoker/poker.engine/src/app.ts
    sg.setApiKey(process.env.POKER_SENDGRID_API_KEY);
/home/dev/ctppoker/scripts/vagrant/game_server/install_files/game_server.env
    POKER_SENDGRID_API_KEY=get_one_from_sendgrid
---------------------------------------------------------------------
cd ~/ctpexe
./ctp-qt
--------------------
./ctp-cli keypoolrefill 250000
./ctp-cli getwalletinfo
--------------------

CTP - xpub key
addmultisigaddress XvmbHrxQdjeHyYPAR45oVV3Qeno9vKRKfz

./ctp-cli addmultisigaddress 2 "[\"XvmbHrxQdjeHyYPAR45oVV3Qeno9vKRKfz\",\"XoPS2EYctqhCTEEvpJtmuw5zpjNJ2ycASX\"]"
--> UnsXnpsdr7iYzt8PmpqMzMRHGESBa5wx3

curl --user ctplinuxdev1 --data-binary '{"jsonrpc": "1.0", "id":"ctplinuxdev1", "method": "addmultisigaddress", "params": [2, "[\"XvmbHrxQdjeHyYPAR45oVV3Qeno9vKRKfz\",\"XoPS2EYctqhCTEEvpJtmuw5zpjNJ2ycASX\"]"] }' -H 'content-type: text/plain;' http://127.0.0.1:39998/

/home/dev/ctppoker/poker.payments/test/webserver/DashTxControllerFixture.ts
currencyConfig.masterAccount.public = "XvmbHrxQdjeHyYPAR45oVV3Qeno9vKRKfz";
---------------------------------------------------------------------
./ctp-cli getwalletinfo
XpkYdHNjkKVJAhdrYJRmjgaLY9z78TA13d -->
dev@ubuntu:~/ctpexe$ ./ctp-cli getnewaddress
XvmbHrxQdjeHyYPAR45oVV3Qeno9vKRKfz
dev@ubuntu:~/ctpexe$ ./ctp-cli getnewaddress
XoPS2EYctqhCTEEvpJtmuw5zpjNJ2ycASX
dev@ubuntu:~/ctpexe$ ./ctp-cli getnewaddress
XfWCYRKf5fWRe5VWijp4B78814fE2omTLG

./ctp-cli validateaddress XvmbHrxQdjeHyYPAR45oVV3Qeno9vKRKfz
./ctp-cli validateaddress XoPS2EYctqhCTEEvpJtmuw5zpjNJ2ycASX
{
  "isvalid": true,
  "address": "XoPS2EYctqhCTEEvpJtmuw5zpjNJ2ycASX",
  "scriptPubKey": "76a9148b4eb00c5f104b2d85bb0f6eee22c64b89ca4fad88ac",
  "ismine": true,
  "iswatchonly": false,
  "isscript": false,
  "pubkey": "022cc015dba6579b905ef08cd9c90793911d709c8a1418f2b21a5c27dbf6c94c7d",
  "iscompressed": true,
  "account": "",
  "timestamp": 1607049389
}
./ctp-cli validateaddress XfWCYRKf5fWRe5VWijp4B78814fE2omTLG


---------------------------------------------------------------------
=======
curl "https://download.maxmind.com/app/geoip_download?edition_id=GeoLite2-Country&license_key=vP65qsGQCxfewnTs&suffix=tar.gz" -o GeoLite2-Country.tar.gz \
  && tar -xzvf GeoLite2-Country.tar.gz \
  && mv GeoLite2-Country_*/GeoLite2-Country.mmdb /home/dev/ctppoker/poker.engine/build/poker.engine/GeoLite2-Country.mmdb
============
xpub about ruby
https://gist.github.com/nmarley/506a3d3036d55c878696
