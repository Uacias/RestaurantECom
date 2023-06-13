import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography, useMediaQuery } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

function createData(weekDay, timeOpen, timeClose) {
  return { weekDay, timeOpen, timeClose };
}

const rows = [
  createData("Sunday", "11:00 A.m.", "5:00 P.m."),
  createData("Monday", "10:00 A.m.", "10:00 P.m."),
  createData("Tuesday", "10:00 A.m.", "10:00 P.m."),
  createData("Wednesday", "10:00 A.m.", "10:00 P.m."),
  createData("Thursday", "10:00 A.m.", "10:00 P.m."),
  createData("Friday", "8:00 A.m.", "11:00 P.m."),
  createData("Saturday", "8:00 A.m.", "11:00 P.m."),
];

const ContactHours = () => {
  const isMobile = useMediaQuery("(min-width: 769px)");
  const isSmallMobile = useMediaQuery("(max-width: 490px)");
  const tableWidth = isMobile ? "66%" : "100%";
  return (
    <Box
      width="75%"
      margin="104px auto"
      sx={{
        textAlign: "center",
        backgroundColor: "rgba(190, 202, 196, 0.66)",
        p: 4,
        borderRadius: "16px",
      }}
    >
      <Box>
        <Typography
          variant="h2"
          sx={{ textAlign: "center", fontWeight: "bold", mb: "16px" }}
        >
          Opening Hours
        </Typography>
        {isSmallMobile ? (
          <>
            {rows.map((row) => (
              <Box sx={{ mb: 2 }}>
                <Typography
                  key={row.weekDay}
                  variant="h5"
                  sx={{ fontWeight: "bold" }}
                >
                  {`${row.weekDay} `}
                </Typography>
                <Typography variant="h6">
                  {`${row.timeOpen} - ${row.timeClose}`}
                </Typography>
              </Box>
            ))}
          </>
        ) : (
          <TableContainer
            sx={{ width: tableWidth, margin: "0 auto" }}
            component={Paper}
          >
            <Table sx={{ minWidth: 320 }}>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
                    Day
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ fontWeight: "bold", fontSize: "1.3rem" }}
                  >
                    Open
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ fontWeight: "bold", fontSize: "1.3rem" }}
                  >
                    Close
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.weekDay}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ fontSize: "1.11rem" }}
                    >
                      {row.weekDay}
                    </TableCell>
                    <TableCell align="left" sx={{ fontSize: "1.11rem" }}>
                      {row.timeClose}
                    </TableCell>
                    <TableCell align="left" sx={{ fontSize: "1.11rem" }}>
                      {row.timeClose}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>

      <Typography
        variant="h2"
        sx={{ textAlign: "center", fontWeight: "bold", marginBlock: "32px " }}
      >
        Get in touch
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: isMobile ? "space-evenly" : "center",
          flexDirection: isMobile ? "row" : "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "32px",
          }}
        >
          <LocationOnIcon sx={{ fontSize: "48px", mb: "16px" }} />
          <Typography variant="h5">
            We are located at Lublin, Solna 1
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "32px",
          }}
        >
          <PhoneIcon sx={{ fontSize: "48px", mb: "16px" }} />
          <Typography variant="h5">Call us at +48 333 333 333</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "32px",
          }}
        >
          <EmailIcon sx={{ fontSize: "48px", mb: "16px" }} />
          <Typography variant="h5">Email us at lenemours@gmail.com</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactHours;
