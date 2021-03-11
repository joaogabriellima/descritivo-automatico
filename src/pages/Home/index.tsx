import React, { useState, useEffect } from 'react';
import { Typography, Container, Grid, FormControlLabel, Button, TextField, Checkbox } from '@material-ui/core';

// Styles
import styles from './styles';

export default function HomePage() {
    const [names, setNames] = useState('');
    const [isDefault, setIsDefault] = useState(true);
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    function OnSubmit() {
        console.log(startDate);
        console.log(endDate);
        console.log(names);

        if (isDefault) {
            const allNames = names.split(';');
            allNames.forEach((e) => {

            });
            const descriptiveDefaultText = 'Boa tarde, Vitor! Segue anexo o descritivo referente ao período de 01/02/2021 a 28/02/2021. Estando de acordo, por gentileza, enviar a nota fiscal para pagamento no e-mail: financeiro@kuadro.com.br. Atte., Marina Ribeiro';
            return;
        }
    }

    const handleChangeYes = () => {
        setIsDefault(true);
    };

    const handleChangeNo = () => {
        setIsDefault(false);
    };

    const handleChangeNames = (event) => {
        setNames(event.target.value);
    }

    const handleChangeStartDate = (event) => {
        setStartDate(event.target.value);
    }

    const handleChangeEndDate = (event) => {
        setEndDate(event.target.value);
    }

    return (
        <Container component="main" maxWidth="xs">
            <div style={styles.box as React.CSSProperties}>
                <Typography component="h1" variant="h5" style={styles.boxTitle}>
                    Geração automática de Descritivos
                </Typography>
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <Typography component="h5" variant="h5" style={styles.checkboxTitle}>
                            Insira os nomes separados por ponto e vírgula (;)
                        </Typography>
                        <TextField
                            autoComplete="fname"
                            name="firstName"
                            variant="outlined"
                            required
                            fullWidth
                            id="firstName"
                            label="Nomes"
                            autoFocus
                            placeholder="exemplo; exemplo2; exemplo3"
                            style={styles.namesInput}
                            onChange={handleChangeNames}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="h5" variant="h5" style={styles.checkboxTitle}>
                            Selecione o período do descritivo
                        </Typography>
                        <TextField
                            id="startDate"
                            label="Início"
                            type="date"
                            defaultValue="2021-03-01"
                            style={styles.dateInput}
                            onChange={handleChangeStartDate}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="endDate"
                            label="Fim"
                            type="date"
                            defaultValue="2021-03-01"
                            style={styles.dateInput}
                            onChange={handleChangeEndDate}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography component="h5" variant="h5" style={styles.checkboxTitle}>
                            Descritivo padrão?
                        </Typography>
                        <FormControlLabel
                            control={<Checkbox checked={isDefault} onChange={handleChangeYes} name="Sim" />}
                            label="Sim"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={!isDefault} onChange={handleChangeNo} name="Não" />}
                            label="Não"
                        />
                    </Grid>

                    {!isDefault ? (
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                multiline
                                rows={8}
                                id="firstName"
                                label="Texto do descritivo"
                                autoFocus
                            />
                        </Grid>
                    ) : null}
                </Grid>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={OnSubmit}
                    style={styles.submit}
                >
                    Gerar Descritivos
              </Button>
            </div>
        </Container>
    );
}