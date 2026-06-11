import { Router } from 'express';
import {
	clientesComMaisCompras,
	exportClientesComMaisComprasCsv,
	exportClientesComMaisComprasPdf,
	exportEstoqueBaixoCsv,
	exportEstoqueBaixoPdf,
	exportFaturamentoTotalCsv,
	exportFaturamentoTotalPdf,
	exportProdutosMaisVendidosCsv,
	exportProdutosMaisVendidosPdf,
	exportTicketMedioCsv,
	exportTicketMedioPdf,
	estoqueBaixo,
	faturamentoTotal,
	listReports,
	produtosMaisVendidos,
	reportsStatus,
	ticketMedio,
} from './reports.controller.js';

const reportsRoutes = Router();

reportsRoutes.get('/', listReports);
reportsRoutes.get('/status', reportsStatus);
reportsRoutes.get('/faturamento-total', faturamentoTotal);
reportsRoutes.get('/ticket-medio', ticketMedio);
reportsRoutes.get('/produtos-mais-vendidos', produtosMaisVendidos);
reportsRoutes.get('/clientes-com-mais-compras', clientesComMaisCompras);
reportsRoutes.get('/estoque-baixo', estoqueBaixo);
reportsRoutes.get('/faturamento-total/export/csv', exportFaturamentoTotalCsv);
reportsRoutes.get('/faturamento-total/export/pdf', exportFaturamentoTotalPdf);
reportsRoutes.get('/ticket-medio/export/csv', exportTicketMedioCsv);
reportsRoutes.get('/ticket-medio/export/pdf', exportTicketMedioPdf);
reportsRoutes.get('/produtos-mais-vendidos/export/csv', exportProdutosMaisVendidosCsv);
reportsRoutes.get('/produtos-mais-vendidos/export/pdf', exportProdutosMaisVendidosPdf);
reportsRoutes.get('/clientes-com-mais-compras/export/csv', exportClientesComMaisComprasCsv);
reportsRoutes.get('/clientes-com-mais-compras/export/pdf', exportClientesComMaisComprasPdf);
reportsRoutes.get('/estoque-baixo/export/csv', exportEstoqueBaixoCsv);
reportsRoutes.get('/estoque-baixo/export/pdf', exportEstoqueBaixoPdf);

export default reportsRoutes;