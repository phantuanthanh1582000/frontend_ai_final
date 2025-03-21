import React, { useState } from "react";
import { Upload, Button, Input, Card, List, Spin, message, Image } from "antd";
import { UploadOutlined, SearchOutlined } from "@ant-design/icons";
import axios from "axios";

const API_BASE_URL = "https://backend-ai-final.onrender.com";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [predictions, setPredictions] = useState([]);
  const [review, setReview] = useState("");
  const [reviewAnalysis, setReviewAnalysis] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Xử lý tải ảnh lên và phân loại
  const handleUpload = async (file) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(`${API_BASE_URL}/classify_image`, formData);
      setPredictions(response.data.predictions);
      message.success("Phân loại ảnh thành công!");
    } catch (error) {
      message.error("Lỗi phân loại ảnh!");
    } finally {
      setLoading(false);
    }
  };

  // Xử lý phân tích nhận xét
  const analyzeReview = async () => {
    if (!review) {
      message.warning("Vui lòng nhập nhận xét!");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/analyze_review`, { review });
      setReviewAnalysis(response.data.analysis);
      message.success("Phân tích nhận xét thành công!");
    } catch (error) {
      message.error("Lỗi phân tích nhận xét!");
    } finally {
      setLoading(false);
    }
  };

  // Xử lý gợi ý sản phẩm
  const recommendProducts = async () => {
    if (!searchQuery) {
      message.warning("Vui lòng nhập từ khóa tìm kiếm!");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/recommend_products`, {
        search_query: searchQuery,
      });
      setRecommendations(response.data.recommendations);
      message.success("Gợi ý sản phẩm thành công!");
    } catch (error) {
      message.error("Lỗi gợi ý sản phẩm!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>🚀 E-commerce AI</h1>

      {/* Upload & Phân loại ảnh */}
      <Card title="🔍 Phân loại ảnh" style={{ marginBottom: "20px" }}>
        <Upload beforeUpload={handleUpload} showUploadList={false}>
          <Button icon={<UploadOutlined />}>Tải ảnh lên</Button>
        </Upload>
        {loading && <Spin />}
        <List
          dataSource={predictions}
          renderItem={(item) => (
            <List.Item>
              {item.description} - {(item.confidence * 100).toFixed(2)}%
            </List.Item>
          )}
        />
      </Card>

      {/* Phân tích nhận xét */}
      <Card title="📝 Phân tích nhận xét" style={{ marginBottom: "20px" }}>
        <Input.TextArea
          rows={4}
          placeholder="Nhập đánh giá sản phẩm..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <Button onClick={analyzeReview} type="primary" style={{ marginTop: "10px" }}>
          Phân tích
        </Button>
        {loading && <Spin />}
        {reviewAnalysis && <p><strong>Kết quả:</strong> {JSON.stringify(reviewAnalysis)}</p>}
      </Card>

      {/* Gợi ý sản phẩm */}
      <Card title="🎯 Gợi ý sản phẩm">
        <Input
          placeholder="Nhập từ khóa sản phẩm..."
          prefix={<SearchOutlined />}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ marginBottom: "10px" }}
        />
        <Button onClick={recommendProducts} type="primary">
          Nhận gợi ý
        </Button>
        {loading && <Spin />}
        <List
          grid={{ gutter: 16, column: 2 }}
          dataSource={recommendations}
          renderItem={(item) => (
            <List.Item>
              <Card
                cover={<Image alt={item.name} src={item.image_url} style={{ width: "100%", objectFit: "cover" }} />}
              >
                <Card.Meta title={item.name} description={`${item.category} - $${item.price}`} />
              </Card>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default App;
