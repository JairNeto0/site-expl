import { getReportData, getReportsStatus } from './reports.service.js';
import { toCsv, toPdfBuffer } from './reports.exporters.js';

const reportsCatalog = [
	{
		method: 'GET',
		path: '/api/reports',
		description: 'Lista todos os relatórios disponíveis',
	},
	{
		method: 'GET',
		path: '/api/reports/status',
		description: 'Verifica se a API de relatórios e o banco estão funcionando',
	},
	{
		method: 'GET',
		path: '/api/reports/faturamento-total',
		description: 'Retorna o faturamento total somando transacoes_financeiras.valor_recebido',
		filters: ['id_forma', 'id_pedido', 'codigo_externo'],
	},
	{
		method: 'GET',
		path: '/api/reports/ticket-medio',
		description: 'Retorna o ticket médio calculado a partir de pedidos.valor_total',
		filters: ['status', 'id_usuario', 'id_endereco', 'id_cupom'],
	},
	{
		method: 'GET',
		path: '/api/reports/produtos-mais-vendidos?limit=10',
		description: 'Lista os produtos mais vendidos com base em itens_pedido',
		filters: ['id_produto', 'id_categoria', 'ativo', 'limit'],
	},
	{
		method: 'GET',
		path: '/api/reports/clientes-com-mais-compras?limit=10',
		description: 'Lista os clientes com mais pedidos e maior valor acumulado',
		filters: ['id_usuario', 'perfil', 'data_inicio', 'data_fim', 'limit'],
	},
	{
		method: 'GET',
		path: '/api/reports/estoque-baixo?threshold=10&limit=20',
		description: 'Lista produtos com estoque igual ou abaixo do limite informado',
		filters: ['threshold', 'limit', 'id_categoria', 'ativo'],
	},
	{
		method: 'GET',
		path: '/api/reports/faturamento-total/export/csv',
		description: 'Baixa faturamento total em CSV usando os filtros da query',
	},
	{
		method: 'GET',
		path: '/api/reports/faturamento-total/export/pdf',
		description: 'Baixa faturamento total em PDF usando os filtros da query',
	},
	{
		method: 'GET',
		path: '/api/reports/ticket-medio/export/csv',
		description: 'Baixa ticket médio em CSV usando os filtros da query',
	},
	{
		method: 'GET',
		path: '/api/reports/ticket-medio/export/pdf',
		description: 'Baixa ticket médio em PDF usando os filtros da query',
	},
	{
		method: 'GET',
		path: '/api/reports/produtos-mais-vendidos/export/csv',
		description: 'Baixa produtos mais vendidos em CSV usando os filtros da query',
	},
	{
		method: 'GET',
		path: '/api/reports/produtos-mais-vendidos/export/pdf',
		description: 'Baixa produtos mais vendidos em PDF usando os filtros da query',
	},
	{
		method: 'GET',
		path: '/api/reports/clientes-com-mais-compras/export/csv',
		description: 'Baixa clientes com mais compras em CSV usando os filtros da query',
	},
	{
		method: 'GET',
		path: '/api/reports/clientes-com-mais-compras/export/pdf',
		description: 'Baixa clientes com mais compras em PDF usando os filtros da query',
	},
	{
		method: 'GET',
		path: '/api/reports/estoque-baixo/export/csv',
		description: 'Baixa estoque baixo em CSV usando os filtros da query',
	},
	{
		method: 'GET',
		path: '/api/reports/estoque-baixo/export/pdf',
		description: 'Baixa estoque baixo em PDF usando os filtros da query',
	},
];

function createReportHandler(reportKey) {
	return async function reportHandler(req, res, next) {
		try {
			const report = await getReportData(reportKey, req.query);

			return res.status(200).json({
				success: true,
				message: `${report.title} carregado com sucesso`,
				data: report.data,
				filters: report.filters,
			});
		} catch (error) {
			return next(error);
		}
	};
}

function createDownloadHandler(reportKey, format) {
	return async function downloadHandler(req, res, next) {
		try {
			const report = await getReportData(reportKey, req.query);
			const fileName = `${report.filenameBase}.${format}`;

			if (format === 'csv') {
				const csvContent = toCsv(report.data);

				res.setHeader('Content-Type', 'text/csv; charset=utf-8');
				res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);

				return res.status(200).send(csvContent);
			}

			const pdfBuffer = await toPdfBuffer({
				title: report.title,
				subtitle: 'Exportação de relatório',
				data: report.data,
				filters: report.filters,
			});

			res.setHeader('Content-Type', 'application/pdf');
			res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);

			return res.status(200).send(pdfBuffer);
		} catch (error) {
			return next(error);
		}
	};
}

export const faturamentoTotal = createReportHandler('faturamento-total');
export const ticketMedio = createReportHandler('ticket-medio');
export const produtosMaisVendidos = createReportHandler('produtos-mais-vendidos');
export const clientesComMaisCompras = createReportHandler('clientes-com-mais-compras');
export const estoqueBaixo = createReportHandler('estoque-baixo');

export const exportFaturamentoTotalCsv = createDownloadHandler('faturamento-total', 'csv');
export const exportFaturamentoTotalPdf = createDownloadHandler('faturamento-total', 'pdf');
export const exportTicketMedioCsv = createDownloadHandler('ticket-medio', 'csv');
export const exportTicketMedioPdf = createDownloadHandler('ticket-medio', 'pdf');
export const exportProdutosMaisVendidosCsv = createDownloadHandler('produtos-mais-vendidos', 'csv');
export const exportProdutosMaisVendidosPdf = createDownloadHandler('produtos-mais-vendidos', 'pdf');
export const exportClientesComMaisComprasCsv = createDownloadHandler('clientes-com-mais-compras', 'csv');
export const exportClientesComMaisComprasPdf = createDownloadHandler('clientes-com-mais-compras', 'pdf');
export const exportEstoqueBaixoCsv = createDownloadHandler('estoque-baixo', 'csv');
export const exportEstoqueBaixoPdf = createDownloadHandler('estoque-baixo', 'pdf');

export async function listReports(req, res, next) {
	try {
		return res.status(200).json({
			success: true,
			message: 'Rotas de relatórios disponíveis',
			data: reportsCatalog,
		});
	} catch (error) {
		return next(error);
	}
}

export async function reportsStatus(req, res, next) {
	try {
		const data = await getReportsStatus();

		return res.status(200).json({
			success: true,
			message: 'API de relatórios funcionando corretamente',
			data,
		});
	} catch (error) {
		return next(error);
	}
}

