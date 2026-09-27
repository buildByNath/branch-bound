import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StateSpaceVisualizer({ currentStepData }) {
  const { tree } = currentStepData;

  // Node position helper
  const getNode = (id) => tree.nodes.find((n) => n.id === id);

  return (
    <div className="relative w-full aspect-[600/360] flex items-center justify-center p-2">
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible select-none">
        
        {/* Draw Edges */}
        {tree.edges.map((edge, idx) => {
          const from = getNode(edge.from);
          const to = getNode(edge.to);
          if (!from || !to) return null;

          const isOptimal = edge.optimal;
          const isPruned = edge.pruned;
          const isActive = edge.active;

          let stroke = 'rgba(255, 255, 255, 0.2)';
          let strokeWidth = '0.8';
          let dash = 'none';

          if (isOptimal) {
            stroke = '#34c759';
            strokeWidth = '1.4';
          } else if (isPruned) {
            stroke = '#ff3b30';
            strokeWidth = '0.9';
            dash = '1.5 1.5';
          } else if (isActive) {
            stroke = '#0071e3';
            strokeWidth = '1.3';
          }

          const midX = (from.x + to.x) / 2;
          const midY = (from.y + to.y) / 2;

          return (
            <g key={`edge-${idx}`}>
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeDasharray={dash}
                className="transition-all duration-300"
              />
              {/* Edge cost/label */}
              {edge.label && (
                <g transform={`translate(${midX}, ${midY})`}>
                  <rect
                    x="-6"
                    y="-3"
                    width="12"
                    height="6"
                    rx="1.5"
                    fill="#000000"
                    stroke={stroke}
                    strokeWidth="0.3"
                  />
                  <text
                    y="1.2"
                    fill={isOptimal ? '#34c759' : isPruned ? '#ff4d4f' : isActive ? '#60a5fa' : 'rgba(255,255,255,0.7)'}
                    fontSize="2.2"
                    fontFamily="monospace"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    {edge.label}
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {/* Draw Nodes */}
        {tree.nodes.map((node) => {
          const isENode = node.status === 'enode';
          const isLive = node.status === 'live';
          const isDead = node.status === 'dead';
          const isPruned = node.status === 'pruned';
          const isOptimal = node.status === 'optimal';
          const isSolution = node.status === 'solution';

          let fill = '#18181b';
          let stroke = 'rgba(255,255,255,0.3)';
          let strokeWidth = '0.6';
          let textFill = '#ffffff';

          if (isENode) {
            fill = '#0071e3';
            stroke = '#60a5fa';
            strokeWidth = '1.2';
          } else if (isLive) {
            fill = '#2a1b02';
            stroke = '#f59e0b';
            strokeWidth = '0.9';
            textFill = '#fbbf24';
          } else if (isPruned) {
            fill = '#22080a';
            stroke = '#ff3b30';
            strokeWidth = '0.7';
            textFill = '#f87171';
          } else if (isOptimal || isSolution) {
            fill = '#062810';
            stroke = '#34c759';
            strokeWidth = '1.2';
            textFill = '#4ade80';
          } else if (isDead) {
            fill = '#1f1f23';
            stroke = 'rgba(255,255,255,0.15)';
            textFill = 'rgba(255,255,255,0.5)';
          }

          return (
            <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
              {/* Pulse animation for active E-node */}
              {isENode && (
                <circle
                  r="6.5"
                  fill="none"
                  stroke="#0071e3"
                  strokeWidth="0.6"
                  opacity="0.5"
                  className="animate-ping"
                />
              )}

              {/* Main Node Circle */}
              <circle
                r="4.2"
                fill={fill}
                stroke={stroke}
                strokeWidth={strokeWidth}
                className="transition-all duration-300"
              />

              {/* Bound estimate badge above */}
              <text
                y="-6"
                fill={isOptimal ? '#34c759' : isPruned ? '#ff3b30' : isENode ? '#60a5fa' : isLive ? '#f59e0b' : 'rgba(255,255,255,0.6)'}
                fontSize="2.4"
                fontWeight="bold"
                fontFamily="monospace"
                textAnchor="middle"
              >
                b={node.bound}
              </text>

              {/* Label below */}
              <text
                y="8"
                fill={textFill}
                fontSize="2.4"
                fontWeight="600"
                fontFamily="-apple-system, sans-serif"
                textAnchor="middle"
              >
                {node.label}
              </text>

              {/* Status pill under label */}
              {isPruned && (
                <g transform="translate(0, 11)">
                  <rect x="-5" y="-1.5" width="10" height="3" rx="0.8" fill="#ff3b30" />
                  <text y="0.8" fill="#ffffff" fontSize="1.8" fontWeight="bold" textAnchor="middle">
                    PRUNED
                  </text>
                </g>
              )}
              {isENode && (
                <g transform="translate(0, 11)">
                  <rect x="-4.5" y="-1.5" width="9" height="3" rx="0.8" fill="#0071e3" />
                  <text y="0.8" fill="#ffffff" fontSize="1.8" fontWeight="bold" textAnchor="middle">
                    E-NODE
                  </text>
                </g>
              )}
              {isOptimal && (
                <g transform="translate(0, 11)">
                  <rect x="-5.5" y="-1.5" width="11" height="3" rx="0.8" fill="#34c759" />
                  <text y="0.8" fill="#ffffff" fontSize="1.8" fontWeight="bold" textAnchor="middle">
                    OPTIMAL
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
