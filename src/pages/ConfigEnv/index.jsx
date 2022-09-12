import * as React from 'react';
import {
  Container,
  Card,
  CardContent,
  FormControl,
  TextField,
  Button,
  CardActions,
  CardHeader,
  ButtonGroup,
} from '@mui/material';
import { getBaseURLConfig, setBaseURLConfig } from '../../utils/getBaseURL';

const CURRENT_BASE_URL = import.meta.env.OM_BASE_URL;

export default function ConfigEnv() {
  const [baseURL, setBaseURL] = React.useState(
    getBaseURLConfig() || CURRENT_BASE_URL
  );

  return (
    <Container style={{ paddingTop: '20px' }}>
      <Card>
        <CardHeader
          title="Cấu hình biến môi trường"
          subheader="Cấu hình base url để gọi được config mặc định từ file .env. Tuy nhiên, để đáp ứng việc linh động thay đổi BaseURL mà không cần phải build lại project thì bạn có thể thay đổi biến môi trường BaseURL tại đây. Giá trị sẽ được lưu trong local storage của trình duyệt. Và khi gọi api dữ liệu baseURL sẽ được ưu tiên lấy từ local storage - nếu nó không tồn tại thì sẽ lấy giá trị mặc định trong file .env"
        />
        <CardContent>
          <FormControl>
            <TextField
              sx={{ width: '100%' }}
              id="base_url"
              label="Base URL"
              value={baseURL}
              onChange={(e) => {
                setBaseURL(e.target.value);
              }}
            />
          </FormControl>
        </CardContent>
        <CardActions>
          <ButtonGroup>
            <Button
              type="submit"
              onClick={() => {
                setBaseURLConfig(baseURL);
                window.location.reload();
                alert('Đã cập nhật Base URL thành: ' + baseURL);
              }}>
              Change
            </Button>
            <Button
              type="reset"
              onClick={() => {
                setBaseURL(CURRENT_BASE_URL);
                setBaseURLConfig(CURRENT_BASE_URL);
                window.location.reload();
                alert('Đã reset lại base URL mặc định: ' + CURRENT_BASE_URL);
              }}>
              Reset
            </Button>
          </ButtonGroup>
        </CardActions>
      </Card>
    </Container>
  );
}
