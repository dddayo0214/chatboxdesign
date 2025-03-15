import React, { useState } from "react";
import "./chatbox.css"; // 引入 CSS 文件

const ChatboxDesigner = () => {
    const [bgColor, setBgColor] = useState("#ffffff");
    const [borderColor, setBorderColor] = useState("#000000");
    const [borderStyle, setBorderStyle] = useState("solid");
    const [borderRadius, setBorderRadius] = useState(10);
    const [fontSize, setFontSize] = useState(16);
    const [fontColor, setFontColor] = useState("#000000");
    const [width, setWidth] = useState(300);
    const [height, setHeight] = useState(200);
    const [shadowOffsetX, setShadowOffsetX] = useState(0);
    const [shadowOffsetY, setShadowOffsetY] = useState(4);
    const [shadowBlur, setShadowBlur] = useState(6);
    const [shadowColor, setShadowColor] = useState("#000000"); // 初始設置為黑色

    const chatboxStyle = {
        backgroundColor: bgColor,
        borderColor: borderColor,
        borderStyle: borderStyle,
        borderRadius: `${borderRadius}px`,
        fontSize: `${fontSize}px`,
        color: fontColor,
        width: `${width}px`,
        height: `${height}px`,
        boxShadow: `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px ${shadowColor}`, // 使用顏色選擇器選擇的顏色
    };

    const generateCode = () => {
        const htmlCode = `
          <div style="background-color: ${bgColor}; border: ${borderStyle} 2px ${borderColor}; border-radius: ${borderRadius}px; font-size: ${fontSize}px; color: ${fontColor}; width: ${width}px; height: ${height}px; box-shadow: ${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px ${shadowColor};">
            <p>這是預覽的對話框！</p>
            <p>你可以調整上面的設置來看到即時變化。</p>
          </div>
        `;

        const cssCode = `
          .chatbox {
            background-color: ${bgColor};
            border: ${borderStyle} 2px ${borderColor};
            border-radius: ${borderRadius}px;
            font-size: ${fontSize}px;
            color: ${fontColor};
            width: ${width}px;
            height: ${height}px;
            box-shadow: ${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px ${shadowColor};
          }
        `;

        navigator.clipboard.writeText(htmlCode + "\n\n" + cssCode);
        alert("HTML 和 CSS 代碼已經複製！");
    };


    return (
        <div className="designer-container">
            <div className="control-panel">
                <h3>設計控制面板</h3>

                <div className="input-group">
                    <label>背景顏色</label>
                    <input
                        type="color"
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>邊框顏色</label>
                    <input
                        type="color"
                        value={borderColor}
                        onChange={(e) => setBorderColor(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>邊框樣式</label>
                    <select
                        value={borderStyle}
                        onChange={(e) => setBorderStyle(e.target.value)}
                    >
                        <option value="solid">實線</option>
                        <option value="dashed">虛線</option>
                        <option value="dotted">點線</option>
                    </select>
                </div>

                <div className="input-group">
                    <label>圓角大小</label>
                    <input
                        type="range"
                        min="0"
                        max="50"
                        value={borderRadius}
                        onChange={(e) => setBorderRadius(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>字體大小</label>
                    <input
                        type="range"
                        min="12"
                        max="30"
                        value={fontSize}
                        onChange={(e) => setFontSize(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>字體顏色</label>
                    <input
                        type="color"
                        value={fontColor}
                        onChange={(e) => setFontColor(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>寬度</label>
                    <input
                        type="number"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        min="100"
                        max="600"
                    />
                </div>

                <div className="input-group">
                    <label>高度</label>
                    <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        min="100"
                        max="500"
                    />
                </div>

                <div className="input-group">
                    <label>陰影偏移 (X軸)</label>
                    <input
                        type="number"
                        value={shadowOffsetX}
                        onChange={(e) => setShadowOffsetX(e.target.value)}
                        min="-10"
                        max="10"
                    />
                </div>

                <div className="input-group">
                    <label>陰影偏移 (Y軸)</label>
                    <input
                        type="number"
                        value={shadowOffsetY}
                        onChange={(e) => setShadowOffsetY(e.target.value)}
                        min="-10"
                        max="10"
                    />
                </div>

                <div className="input-group">
                    <label>陰影模糊</label>
                    <input
                        type="number"
                        value={shadowBlur}
                        onChange={(e) => setShadowBlur(e.target.value)}
                        min="0"
                        max="20"
                    />
                </div>

                <div className="input-group">
                    <label>陰影顏色</label>
                    <input
                        type="color" // 改為 color 類型來支持顏色選擇器
                        value={shadowColor}
                        onChange={(e) => setShadowColor(e.target.value)}
                    />
                </div>

                <button onClick={generateCode}>導出並自動複製 HTML/CSS</button>
            </div>

            <div className="preview-area">
                <h3>預覽</h3>
                <div className="chatbox" style={chatboxStyle}>
                    <p>這是預覽的對話框！</p>
                    <p>你可以調整上面的設置來看到即時變化。</p>
                </div>
            </div>
        </div>
    );
};

export default ChatboxDesigner;
