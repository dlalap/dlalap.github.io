#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>

ESP8266WebServer server;

uint8_t pin1 = D0;
uint8_t pin2 = D1;
uint8_t pin3 = D2;
uint8_t pin4 = D3;

char* ssid = "G25F5";
char* password = "7DK4N4Z2YYDBNRDZ";

void setup()
{
  pinMode(relayPin, OUTPUT);
  WiFi.begin(ssid, password);
  Serial.begin(115200);

  while(WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(500);
  }
  Serial.println("");
  Serial.print("The IP Address of interest IS... ");
  Serial.print(WiFi.localIP());

  server.on("/", []() {server.send(200, "text/plain", "Hello World!");});
  server.on("/toggle", toggleSwitch);
  server.on("/on", switchOn);
  server.on("/off", switchOff);
  server.begin();
}

void loop()
{
  server.handleClient();
}

void toggleSwitch() {
  digitalWrite(relayPin, !digitalRead(relayPin));
  server.send(204, "");
}

void switchOn() {
  digitalWrite(relayPin, LOW);
  server.send(200, "text/plain", "Switch has been turned ON");
}

void switchOff() {
  digitalWrite(relayPin, HIGH);
  server.send(200, "text/plain", "Switch has been turned OFF");
}

