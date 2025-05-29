import a1Img from "../assets/a1.png";
import CodeSnippet from "../components/CodeSnippet";
import LinkWithIcon from "../components/LinkWithIcon";

export default function PrintingPage() {
  const roboArmCode = `#include <Bluepad32.h>
#include <ESP32Servo.h>

#define DEADZONE 30
#define BASE_PIN 15
#define SHOULDER_PIN 2
#define ELBOW_PIN 4
#define WRIST_PIN 16
#define HAND_PIN 17

Servo base, shoulder, elbow, wrist, hand;
ControllerPtr pad;

void onConnectedGamepad(ControllerPtr ctl) {
  Serial.printf("Gamepad #%d verbunden\n", ctl->index());
  pad = ctl;
}

void onDisconnectedGamepad(ControllerPtr ctl) {
  Serial.printf("Gamepad getrennt\n");
}

int16_t mapAxis(int16_t v) {
  if (abs(v) < DEADZONE) v = 0;
  return map(v, -512, 512, 0, 180);
}
void setup() {
  BP32.setup(&onConnectedGamepad, &onDisconnectedGamepad);
  BP32.enableNewBluetoothConnections(true);

  base.attach(BASE_PIN);
  shoulder.attach(SHOULDER_PIN);
  elbow.attach(ELBOW_PIN);
  wrist.attach(WRIST_PIN);
  hand.attach(HAND_PIN);
}

void loop() {
  BP32.update();
  if (pad && pad->isConnected()) {
    base.write(mapAxis(pad->axisX()));
    shoulder.write(mapAxis(-pad->axisY()));
    elbow.write(mapAxis(-pad->axisRY()));
    hand.write(mapAxis(pad->throttle() - pad->brake()));

    if (pad->l1()) wrist.write(0);
    else if (pad->r1()) wrist.write(180);
    else wrist.write(90);
  }
  delay(15);
}`;
  return (
    <>
      <title>߸ 3d printing</title>
      <h1>3D Printing</h1>
      <img src={a1Img} alt="Bambu Lab A1" className="mx-auto mb-4 w-64 rounded-lg shadow"/>
      <h2>Projects</h2>
      <h3>Robot Arm</h3>
      <p><LinkWithIcon href="https://makerworld.com/en/models/528885-robotic-arm#profileId-445995" target="_blank">3D Model</LinkWithIcon> changed the model to work with my servo motors.</p>
      <CodeSnippet code={roboArmCode} initialLines={5} />
      <h3>Diy Drone</h3>
      <p>WIP</p>
    </>
  );
}