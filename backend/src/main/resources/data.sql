INSERT INTO tb_transacao(id, data_transacao, valor, quantia_ingressos, instagram_comprovante) VALUES (1, '2024-09-29 10:30:00', 50.00, 1, '@teste');
INSERT INTO tb_transacao(id, data_transacao, valor, quantia_ingressos, instagram_comprovante) VALUES (2, '2024-10-28 12:40:00', 50.00, 1, '@teste');
INSERT INTO tb_transacao(id, data_transacao, valor, quantia_ingressos, instagram_comprovante) VALUES (3, '2024-10-28 01:30:00', 50.00, 1, '@teste');
INSERT INTO tb_transacao(id, data_transacao, valor, quantia_ingressos, instagram_comprovante) VALUES (4, '2024-10-10 05:00:00', 50.00, 1, '@teste');
INSERT INTO tb_transacao(id, data_transacao, valor, quantia_ingressos, instagram_comprovante) VALUES (5, '2024-10-10 05:00:00', 50.00, 1, '@teste');
INSERT INTO tb_transacao(id, data_transacao, valor, quantia_ingressos, instagram_comprovante) VALUES (6, '2024-10-10 05:00:00', 50.00, 1, '@teste');
INSERT INTO tb_transacao(id, data_transacao, valor, quantia_ingressos, instagram_comprovante) VALUES (7, '2024-10-10 05:00:00', 50.00, 1, '@teste');
INSERT INTO tb_transacao(id, data_transacao, valor, quantia_ingressos, instagram_comprovante) VALUES (8, '2024-10-20 05:00:00', 50.00, 1, '@teste');
INSERT INTO tb_transacao(id, data_transacao, valor, quantia_ingressos, instagram_comprovante) VALUES (9, '2024-10-20 05:00:00', 50.00, 1, '@teste');

INSERT INTO tb_cliente(id, nome) VALUES (1, 'Maria');
INSERT INTO tb_cliente(id, nome) VALUES (2, 'João');
INSERT INTO tb_cliente(id, nome) VALUES (3, 'Pedro');
INSERT INTO tb_cliente(id, nome) VALUES (4, 'Ana');

INSERT INTO tb_ingresso(id, transacao_id, cliente_id, codigo_consumivel, valor, copos_disponiveis) VALUES (1, 1, 1, '123456', 50.00, 2);
INSERT INTO tb_ingresso(id, transacao_id, cliente_id, codigo_consumivel, valor, copos_disponiveis) VALUES (2, 1, 2, '321DMA', 50.00, 3);
INSERT INTO tb_ingresso(id, transacao_id, cliente_id, codigo_consumivel, valor, copos_disponiveis) VALUES (3, 2, 3, '2ECFEE', 50.00, 2);
INSERT INTO tb_ingresso(id, transacao_id, cliente_id, codigo_consumivel, valor, copos_disponiveis) VALUES (4, 3, 4, '321DEE', 50.00, 2);
