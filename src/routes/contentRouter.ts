import express from 'express';
import getAllAdeleSumo from '../controller/adSumoController';
import getAllAppInsight from '../controller/appInsightController';
import getAllCriticalSystem from '../controller/criticalSystemController';
import getAllDBQuery from '../controller/dbQueryController';
import getAllmySumoQueries from '../controller/mySumoControler';
import getAllOpsCentral from '../controller/opsCentralController';
import getAllPaths from '../controller/pathController';
import getAllTriage from '../controller/triageController';

const router = express.Router();

router.get('/adelesumoquery', getAllAdeleSumo);

router.get('/appInsight', getAllAppInsight);

router.get('/criticalsystem', getAllCriticalSystem);

router.get('/dbQuery', getAllDBQuery);

router.get('/mysumoquery', getAllmySumoQueries);

router.get('/opsCentral', getAllOpsCentral);

router.get('/paths', getAllPaths);

router.get('/triage', getAllTriage);

export default router;
