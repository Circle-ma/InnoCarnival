import {
  Box,
  Card,
  Button,
  Paper,
  Typography,
  CircularProgress,
  Stack,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { QRCodeSVG } from "qrcode.react";
import { UrlData } from "../Face";

const Image = styled.img`
  width: 100%;
  max-width: 350px;
  height: auto;
`;

const CatImage = styled.img`
  width: 100%;
  max-width: 200px;
  aspect-ratio: 1 / 1;
  display: block;
`;

const TigerImage = styled.img`
  width: 100%;
  max-width: 200px;
  aspect-ratio: 1 / 1;
  display: block;
`;

const MainPage: React.FC<UrlData> = ({ email, token }) => {
  const [resultUrl, setResultUrl] = useState("");
  const [isFail, setIsFail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState(0);

  async function post(email: string | null, token: string | null) {
    let formdata = new FormData();
    let data: string = `[{"email":"${email}","token":"${token}","apps_id":"app06","score":1}]`;
    console.log(data);
    formdata.append("message", data);
    let requestOptions = {
      method: "POST",
      body: formdata,
    };

    try {
      let res = await fetch(
        "https://cuhk.iontec.com.hk/api.php",
        requestOptions
      );
      let json = await res.json();
      console.log(json);
      console.log(json.response);
    } catch (err) {
      console.log(err);
    }
  }

  async function send(url: string, event: any) {
    setIsStart(true);
    var formdata = new FormData();
    formdata.append("file", event.target.files[0]);

    var requestOptions = {
      method: "POST",
      body: formdata,
    };
    setIsLoading(true);
    try {
      let res = await fetch(
        "http://137.189.94.89:5000/upload/" + url,
        // "http://circlema.ddns.net:9999/upload/" + url,
        requestOptions
      );
      let json = await res.json();
      console.log(json);
      console.log(json.maskUrl);
      setResultUrl(json.maskUrl);
      setIsFail(false);
    } catch (err) {
      console.log(err);
      setIsFail(true);
    }
    setIsLoading(false);
  }

  function handleCatUpload(event: any) {
    setFileName(event.target.files[0].name);
    setFileSize(event.target.files[0].size);
    send("cat", event);
    post(email, token);
  }
  function handleTigerUpload(event: any) {
    setFileName(event.target.files[0].name);
    setFileSize(event.target.files[0].size);
    send("tiger", event);
    post(email, token);
  }

  return (
    <Paper
      elevation={24}
      sx={{
        borderRadius: 4,
        backgroundImage: "url(/wave.svg)",
        backgroundSize: "cover",
      }}
    >
      {/* {email && (
        <Typography variant="body1" align="center">
          email: {email}
        </Typography>
      )} */}
      <Box padding={6}>
        <Typography variant="h4" align="center">
          Facial Mask Game
        </Typography>
        <Typography variant="h4" align="center">
          改頭換面
        </Typography>
        <Box padding={3}>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={4}
          >
            <Paper sx={{ backgroundColor: "transparent" }} elevation={0}>
              <Box textAlign={"center"}>
                <CatImage src="/cat.jpg" alt="cat" />
              </Box>
              <Box textAlign={"center"} padding={1}>
                <Button
                  variant="contained"
                  sx={{ color: "white" }}
                  endIcon={<PhotoCamera color="secondary" />}
                  component="label"
                >
                  <input
                    hidden
                    accept=".jpg,.png"
                    type="file"
                    onChange={handleCatUpload}
                  />
                  🐱小猫
                </Button>
              </Box>
            </Paper>
            <Paper sx={{ backgroundColor: "transparent" }} elevation={0}>
              <Box textAlign={"center"}>
                <TigerImage src="/tiger.jpg" alt="tiger" />
              </Box>
              <Box textAlign={"center"} padding={1}>
                <Button
                  variant="contained"
                  sx={{ color: "white" }}
                  endIcon={<PhotoCamera color="secondary" />}
                  component="label"
                >
                  <input
                    hidden
                    accept=".jpg,.png"
                    type="file"
                    onChange={handleTigerUpload}
                  />
                  🐯老虎
                </Button>
              </Box>
            </Paper>
          </Stack>
        </Box>
        <Card>
          <Box textAlign={"center"} padding={3}>
            <Box textAlign={"center"}>
              {isLoading && (
                <Box>
                  <Typography>
                    {fileName} has a size of {fileSize} bytes.
                  </Typography>
                  <CircularProgress />
                </Box>
              )}
            </Box>
            {!isLoading && isFail && (
              <Typography sx={{ color: "red" }}>
                錯誤！請上載人臉的相片，並用jpg或png格式。
              </Typography>
            )}
            {!isFail && !isLoading && (
              <Box>
                <Image
                  src={resultUrl}
                  alt="請上載人臉的相片，並用jpg或png格式。"
                />
                {isStart && !isFail && !isLoading && (
                  <Typography>
                    恭喜你！已得1分，請關閉視窗，繼續玩其他遊戲。
                  </Typography>
                )}
              </Box>
            )}
          </Box>
        </Card>
        {isStart && !isFail && !isLoading && (
          <Box marginTop={3}>
            <Card>
              <Box textAlign={"center"} padding={2}>
                <QRCodeSVG value={resultUrl} />
              </Box>
            </Card>
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default MainPage;
