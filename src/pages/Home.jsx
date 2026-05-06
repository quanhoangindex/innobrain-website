import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Option from "../components/ui/Option";
import VideoPlayer from "../components/ui/videoplayer";

function Home() {
  return (
    <div>
      <Input size="md" label="hi" placeholder="8" area="area"></Input>
      hello Home
      <Button variant="outline">this is the button</Button>
      <Option state="">Option</Option>
      <VideoPlayer></VideoPlayer>
    </div>
  );
}

export default Home;
