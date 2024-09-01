import { Chip, Divider, Grid2, Link, Paper, Stack, Typography } from "@mui/material";
import { EDUCATION_CHAPTERS } from "../common/data";

export function Education() {
    return (
        <Stack spacing={2} textAlign={"left"}>

            <Typography variant="h5" fontWeight="bold">Education</Typography>

            <Grid2 container spacing={2} >
                {EDUCATION_CHAPTERS.map((chapter, index) => {

                    return <Grid2 key={index} size={4}>

                        <Paper variant="outlined" sx={{
                            padding: 2,
                            display: 'flex',
                            height: '100%',
                        }}>
                            <Stack spacing={2}>
                                <Grid2 container spacing={2} justifyContent={"space-between"}>
                                    <Grid2>
                                        <Link href={chapter.website}>
                                            <Typography variant="h6" fontWeight={"bold"}>{chapter.title}</Typography>
                                        </Link>
                                    </Grid2>
                                </Grid2>

                                <Divider />
                                <Grid2 container spacing={1}>
                                    {chapter.tags.map((tag, index) => (
                                        <Grid2 key={index}>
                                            <Chip label={tag} />
                                        </Grid2>
                                    ))}

                                </Grid2>
                            </Stack>
                        </Paper>
                    </Grid2>
                })}
            </Grid2>

        </Stack>
    );
}